#!/usr/bin/env python3
"""
Reassemble translated intro_part*.md chunks back into intro.md files.

Usage:
    python3 reassemble_translations.py              # Reassemble all
    python3 reassemble_translations.py --dry-run    # Show what would be done
    python3 reassemble_translations.py --keep       # Don't delete part files after reassembly

After reassembly, the intro_part*.md files are deleted (unless --keep is used).
"""

import re
import sys
from pathlib import Path


def find_chunk_groups(base_dir):
    """
    Find all directories that contain intro_part*.md files.
    Returns dict: directory -> sorted list of chunk paths
    """
    groups = {}
    for chunk_file in base_dir.rglob('intro_part*.md'):
        directory = chunk_file.parent
        if directory not in groups:
            groups[directory] = []
        groups[directory].append(chunk_file)

    # Sort chunks by part number within each group
    for directory in groups:
        groups[directory].sort(
            key=lambda p: int(re.search(r'intro_part(\d+)\.md', p.name).group(1))
        )

    return groups


def reassemble(directory, chunks, dry_run=False, keep=False):
    """
    Reassemble chunks into intro.md.
    Returns (success, total_bytes).
    """
    intro_path = directory / 'intro.md'
    content_parts = []

    for chunk in chunks:
        with open(chunk, 'r', encoding='utf-8') as f:
            content_parts.append(f.read())

    combined = ''.join(content_parts)
    total_bytes = len(combined.encode('utf-8'))

    if not dry_run:
        with open(intro_path, 'w', encoding='utf-8') as f:
            f.write(combined)

        if not keep:
            for chunk in chunks:
                chunk.unlink()

    return True, total_bytes


def main():
    dry_run = '--dry-run' in sys.argv
    keep = '--keep' in sys.argv

    base_dir = Path('en/docs')

    if not base_dir.exists():
        print(f"❌ Directory {base_dir} not found. Run from project root.")
        sys.exit(1)

    groups = find_chunk_groups(base_dir)

    if not groups:
        print("No intro_part*.md files found. Nothing to reassemble.")
        sys.exit(0)

    print(f"{'DRY RUN - ' if dry_run else ''}Found {len(groups)} directories with chunks\n")

    total_reassembled = 0
    total_chunks_processed = 0

    for directory in sorted(groups.keys()):
        chunks = groups[directory]
        rel_dir = directory.relative_to(Path('.'))
        num_chunks = len(chunks)

        action = 'Would reassemble' if dry_run else 'Reassembled'
        success, total_bytes = reassemble(directory, chunks, dry_run=dry_run, keep=keep)

        if success:
            total_reassembled += 1
            total_chunks_processed += num_chunks
            print(f"  {action}: {rel_dir}/intro.md ({num_chunks} parts, {total_bytes:,} bytes)")

    print(f"\n{'=' * 60}")
    print(f"Directories reassembled: {total_reassembled}")
    print(f"Chunks processed:        {total_chunks_processed}")
    if not keep and not dry_run:
        print(f"Part files deleted:      {total_chunks_processed}")
    print(f"{'=' * 60}")

    if dry_run:
        print("\n⚡ Run without --dry-run to actually reassemble.")


if __name__ == '__main__':
    main()
