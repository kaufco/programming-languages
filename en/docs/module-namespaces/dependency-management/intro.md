---
slug: /module-namespaces/dependency-management
title: 15.2. Dependency Management
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 15.2. Dependency Management

Management of dependencies.

## 15.2.1. Package Managers

Tools for managing dependencies and libraries. Package managers enable installing, updating, and managing external code libraries.

### Languages {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'crystal', 'csharp', 'd', 'dart', 'elixir', 'elm', 'erlang', 'fortran', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'java', 'javascript', 'julia', 'kotlin', 'lean4', 'lua', 'nim', 'objective-c', 'ocaml', 'perl', 'php', 'prolog', 'purescript', 'python', 'r', 'racket', 'roc', 'ruby', 'rust', 'scala', 'swift', 'typescript', 'v', 'wolfram-language', 'zig']}>
<TabItem value="clojure" label="Clojure">

```clojure
;; project.clj (Leiningen)
(defproject my-app "1.0.0"
  :dependencies [[org.clojure/clojure "1.11.1"]
                 [ring/ring-core "1.9.5"]])

;; deps.edn (Clojure CLI)
{:deps {org.clojure/clojure {:mvn/version "1.11.1"}
        ring/ring-core {:mvn/version "1.9.5"}}}
```

**Special features:**
- Leiningen and Clojure CLI are the main package managers
- Uses Maven repositories
- Supports local and remote dependencies

**Further reading:**
- [Leiningen Documentation](https://leiningen.org/)
- [Clojure CLI Tools](https://clojure.org/guides/deps_and_cli)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; quicklisp.lisp
(ql:quickload "cl-ppcre")
(ql:quickload "drakma")
```

**Special features:**
- Quicklisp is the main package manager
- Supports system definitions
- Uses central repository structure

**Further reading:**
- [Quicklisp Documentation](https://www.quicklisp.org/beta/)

</TabItem>
<TabItem value="crystal" label="Crystal">

```yaml
# shard.yml
name: my-app
version: 1.0.0
dependencies:
  kemal:
    github: kemalcr/kemal
    version: ~> 0.28.0
```

**Special features:**
- Shards is the package manager
- Uses Git repositories
- Supports version constraints

**Further reading:**
- [Crystal Shards Documentation](https://crystal-lang.org/reference/guides/shards.html)

</TabItem>
<TabItem value="d" label="D">

```json
{
  "name": "my-app",
  "dependencies": {
    "vibe-d": "~>0.9.0"
  }
}
```

**Special features:**
- DUB is the package manager
- Uses JSON configuration
- Supports central package registry

**Further reading:**
- [DUB Documentation](https://dub.pm/)

</TabItem>
<TabItem value="dart" label="Dart">

```yaml
# pubspec.yaml
name: my_app
dependencies:
  http: ^0.13.0
  path: ^1.8.0
```

**Special features:**
- Pub is the package manager
- Uses pub.dev as central registry
- Supports version constraints with `^`

**Further reading:**
- [Dart Pub Documentation](https://dart.dev/tools/pub)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# mix.exs
defmodule MyApp.MixProject do
  use Mix.Project

  def deps do
    [
      {:phoenix, "~> 1.7.0"},
      {:ecto, "~> 3.10"}
    ]
  end
end
```

**Special features:**
- Mix is the package manager
- Uses Hex as central registry
- Supports Git and path dependencies

**Further reading:**
- [Mix Documentation](https://hexdocs.pm/mix/Mix.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
%% rebar.config
{deps, [
    {cowboy, "2.9.0"},
    {ranch, "1.8.0"}
]}.
```

**Special features:**
- Rebar3 is the main package manager
- Uses Hex as central registry
- Supports OTP applications

**Further reading:**
- [Rebar3 Documentation](https://www.rebar3.org/)

</TabItem>
<TabItem value="go" label="Go">

```go
// go.mod
module my-app

go 1.21

require (
    github.com/gin-gonic/gin v1.9.1
    github.com/lib/pq v1.10.9
)
```

**Special features:**
- Go Modules is the package manager
- Uses Git repositories directly
- Supports semantic versioning

**Further reading:**
- [Go Modules Documentation](https://go.dev/ref/mod)

</TabItem>
<TabItem value="haskell" label="Haskell">

```cabal
-- my-app.cabal
name: my-app
version: 1.0.0
build-depends:
    base >= 4.14 && < 5,
    aeson >= 2.0
```

**Special features:**
- Cabal is the package manager
- Uses Hackage as central registry
- Supports Stack as alternative

**Further reading:**
- [Cabal Documentation](https://cabal.readthedocs.io/)

</TabItem>
<TabItem value="haxe" label="Haxe">

```json
{
  "name": "my-app",
  "dependencies": {
    "haxe": "4.3.0",
    "openfl": "9.2.0"
  }
}
```

**Special features:**
- Haxelib is the package manager
- Uses haxelib.org as central registry
- Supports Git repositories

**Further reading:**
- [Haxelib Documentation](https://lib.haxe.org/)

</TabItem>
<TabItem value="java" label="Java">

```xml
<!-- pom.xml (Maven) -->
<dependencies>
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-core</artifactId>
        <version>6.0.0</version>
    </dependency>
</dependencies>
```

**Special features:**
- Maven and Gradle are the main package managers
- Uses Maven Central Repository
- Supports transitive dependencies

**Further reading:**
- [Maven Documentation](https://maven.apache.org/)
- [Gradle Documentation](https://docs.gradle.org/)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.18.0",
    "lodash": "^4.17.21"
  }
}
```

**Special features:**
- npm and yarn are the main package managers
- Uses npmjs.com as central registry
- Supports semantic versioning

**Further reading:**
- [npm Documentation](https://docs.npmjs.com/)
- [Yarn Documentation](https://yarnpkg.com/)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Project.toml
[deps]
DataFrames = "a93c6f00-e57d-5684-b7b6-d8193f3e46c0"
Plots = "91a5bcdd-55d7-5caf-9e0b-520d859cae80"
```

**Special features:**
- Pkg is the package manager
- Uses Julia General Registry
- Supports Git repositories

**Further reading:**
- [Julia Pkg Documentation](https://pkg.julialang.org/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// build.gradle.kts
dependencies {
    implementation("org.jetbrains.kotlin:kotlin-stdlib:1.9.0")
    implementation("com.google.guava:guava:32.1.1-jre")
}
```

**Special features:**
- Gradle and Maven are the main package managers
- Uses Maven Central Repository
- Supports Kotlin Multiplatform

**Further reading:**
- [Kotlin Documentation](https://kotlinlang.org/docs/gradle.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- lakefile.lean (Lake Build System and Package Manager)
import Lake
open Lake DSL

package «my-app» where
  leanOptions := #[⟨`autoImplicit, false⟩]

require mathlib from git
  "https://github.com/leanprover-community/mathlib4" @ "main"

@[default_target]
lean_lib «MyLib» where
  srcDir := "src"
```

**Special features:**
- Lake is the official build system and package manager for Lean 4.
- `lakefile.lean` defines dependencies, targets, and build configuration.
- `require` imports external packages (e.g., from GitHub).
- `lake build`, `lake update`, and `lake env` are the main commands.

**Further reading:**
- [Lean 4 Documentation - Lake](https://lean-lang.org/lean4/doc/setup.html#lake)
- [Lake GitHub](https://github.com/leanprover/lean4/tree/master/src/lake)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- rockspec
package = "my-app"
version = "1.0.0"
dependencies = {
    "lua >= 5.1",
    "luasocket >= 3.0"
}
```

**Special features:**
- LuaRocks is the package manager
- Uses luarocks.org as central registry
- Supports different Lua versions

**Further reading:**
- [LuaRocks Documentation](https://luarocks.org/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# myapp.nimble
version       = "1.0.0"
author        = "Author Name"
description   = "My Application"
license       = "MIT"

requires "nim >= 2.0.0"
requires "chronos >= 4.0.0"
```

**Special features:**
- Nimble is the official package manager
- `.nimble` files with Nim-like DSL syntax
- Uses nimble.directory as central registry
- Supports Git repositories as dependencies

**Further reading:**
- [Nimble Documentation](https://github.com/nim-lang/nimble#readme)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```opam
# opam file
opam-version: "2.0"
depends: [
  "ocaml" {>= "4.14.0"}
  "dune" {>= "3.0"}
]
```

**Special features:**
- OPAM is the package manager
- Uses opam.ocaml.org as central registry
- Supports switch-based installation

**Further reading:**
- [OPAM Documentation](https://opam.ocaml.org/doc/)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# cpanfile
requires 'Mojolicious' => '9.0';
requires 'DBI' => '1.643';
```

**Special features:**
- CPAN is the package manager
- Uses cpan.org as central registry
- Supports cpanm as alternative

**Further reading:**
- [CPAN Documentation](https://www.cpan.org/)

</TabItem>
<TabItem value="php" label="PHP">

```json
{
  "name": "my-app",
  "require": {
    "php": "^8.1",
    "monolog/monolog": "^3.0"
  }
}
```

**Special features:**
- Composer is the package manager
- Uses packagist.org as central registry
- Supports autoloading

**Further reading:**
- [Composer Documentation](https://getcomposer.org/doc/)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% SWI-Prolog Pack Manager
% Installation: ?- pack_install(http_client).
% Uninstallation: ?- pack_remove(http_client).

?- pack_install(mavis).
?- pack_install(list_util).

% Search packages
?- pack_search(json).

% List all installed packages
?- pack_list_installed.
```

**Special features:**
- SWI-Prolog has a built-in pack manager (`pack_install/1`)
- Central registry at pack.swi-prolog.org
- Supports Git repositories as sources
- Packs are installed in `~/.local/share/swi-prolog/pack/`

**Further reading:**
- [SWI-Prolog Pack Documentation](https://www.swi-prolog.org/pack/list)

</TabItem>
<TabItem value="python" label="Python">

```text
# requirements.txt
requests==2.31.0
numpy>=1.24.0
pandas~=2.0.0
```

**Special features:**
- pip is the package manager
- Uses PyPI as central registry
- Supports virtual environments

**Further reading:**
- [pip Documentation](https://pip.pypa.io/)

</TabItem>
<TabItem value="r" label="R">

```r
# DESCRIPTION
Package: my-app
Depends: R (>= 4.0.0)
Imports: dplyr (>= 1.0.0), ggplot2 (>= 3.0.0)
```

**Special features:**
- CRAN is the central registry
- Uses install.packages() for installation
- Supports Bioconductor as alternative

**Further reading:**
- [CRAN Documentation](https://cran.r-project.org/)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
#lang info
(define collection "my-app")
(define deps '("base" "rackunit"))
```

**Special features:**
- Racket Package Manager is integrated
- Uses package server as central registry
- Supports local packages

**Further reading:**
- [Racket Package Documentation](https://docs.racket-lang.org/pkg/index.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Gemfile
source 'https://rubygems.org'

gem 'rails', '~> 7.0'
gem 'pg', '~> 1.4'
```

**Special features:**
- Bundler is the package manager
- Uses rubygems.org as central registry
- Supports Gemfile for dependency management

**Further reading:**
- [Bundler Documentation](https://bundler.io/)

</TabItem>
<TabItem value="rust" label="Rust">

```toml
# Cargo.toml
[package]
name = "my-app"
version = "1.0.0"

[dependencies]
serde = "1.0"
tokio = { version = "1.0", features = ["full"] }
```

**Special features:**
- Cargo is the package manager
- Uses crates.io as central registry
- Supports feature flags

**Further reading:**
- [Cargo Documentation](https://doc.rust-lang.org/cargo/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// build.sbt
libraryDependencies ++= Seq(
  "org.scala-lang.modules" %% "scala-parser-combinators" % "2.2.0",
  "org.typelevel" %% "cats-core" % "2.9.0"
)
```

**Special features:**
- sbt and Maven are the main package managers
- Uses Maven Central Repository
- Supports Scala version-specific dependencies

**Further reading:**
- [sbt Documentation](https://www.scala-sbt.org/)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Package.swift
import PackageDescription

let package = Package(
    name: "MyApp",
    dependencies: [
        .package(url: "https://github.com/apple/swift-algorithms", from: "1.0.0")
    ]
)
```

**Special features:**
- Swift Package Manager is integrated
- Uses Git repositories directly
- Supports semantic versioning

**Further reading:**
- [Swift Package Manager Documentation](https://www.swift.org/package-manager/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    "typescript": "^5.0.0",
    "@types/node": "^20.0.0"
  }
}
```

**Special features:**
- Uses npm/yarn like JavaScript
- Supports @types packages for type definitions
- Supports TypeScript-specific tools

**Further reading:**
- [npm Documentation](https://docs.npmjs.com/)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
(* PacletInfo.m *)
Paclet[
    Name -> "MyApp",
    Version -> "1.0.0",
    Extensions -> {
        {"Dependencies", {
            "WolframLanguageForJupyterLink" -> "1.0.0"
        }}
    }
]
```

**Special features:**
- Paclet Manager is integrated
- Uses Wolfram Paclet Repository
- Supports package dependencies

**Further reading:**
- [Wolfram Paclet Documentation](https://reference.wolfram.com/language/guide/Paclets.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// NuGet: .NET Package Manager
// Package installation via CLI:
// dotnet add package Newtonsoft.Json
// dotnet add package Microsoft.EntityFrameworkCore --version 8.0.0

// Project file (.csproj) contains package references:
// <PackageReference Include="Newtonsoft.Json" Version="13.0.3" />

// Required: using Newtonsoft.Json;
var json = JsonConvert.SerializeObject(new { Name = "Alice" });

// Package restoration:
// dotnet restore
```

**Special features:**
- NuGet is the standard package manager for .NET/C#
- Package definition in `.csproj` files (PackageReference format)
- CLI commands: `dotnet add package`, `dotnet restore`, `dotnet nuget`
- Central repository: nuget.org

**Further reading:**
- [Microsoft NuGet Documentation](https://learn.microsoft.com/en-us/nuget/)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Installation: elm install elm/json
-- Uninstallation: Manual removal from elm.json

-- elm.json (excerpt)
-- {
--     "dependencies": {
--         "direct": {
--             "elm/core": "1.0.5",
--             "elm/json": "1.1.3"
--         }
--     }
-- }
```

**Special features:**
- `elm install <package>` installs packages
- Packages are managed in `elm.json`
- Semantic versioning is automatically checked by the compiler
- Central registry: https://package.elm-lang.org

**Further reading:**
- [Elm Documentation - Install](https://guide.elm-lang.org/install/elm.html)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! fpm.toml (Fortran Package Manager configuration)
! name = "my_project"
! version = "0.1.0"
! [dependencies]
! stdlib = "*"

! Installation: fpm build
! Execution: fpm run

program main
    use stdlib_string_type
    implicit none
end program
```

**Special features:**
- Fortran Package Manager (FPM) as official package manager
- TOML-based configuration (fpm.toml)
- Supports dependencies from Git repositories and the fpm registry

**Further reading:**
- [Fortran Package Manager (FPM)](https://fpm.fortran-lang.org/)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// gleam.toml - Package configuration
// [dependencies]
// gleam_stdlib = ">= 0.34.0 and < 2.0.0"
// gleam_otp = ">= 0.7.0 and < 1.0.0"

// Commands:
// gleam add package_name
// gleam deps download
```

**Special features:**
- Integrated package manager in the `gleam` build tool
- Uses Hex registry for packages
- `gleam.toml` for configuration
- `gleam add` for dependencies

**Further reading:**
- [Gleam Documentation - Packages](https://gleam.run/documentation/tour/packages/)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Grape: Groovy's built-in dependency manager
@Grab('org.apache.commons:commons-lang3:3.12.0')
import org.apache.commons.lang3.StringUtils

println StringUtils.capitalize("hello") // "Hello"

// Gradle (build.gradle) or Maven (pom.xml) for project dependencies
// Gradle itself is written in Groovy
```

**Special features:**
- `@Grab` annotation for inline dependency management (Grape)
- Gradle (Groovy-based) as primary build tool
- Maven compatibility via Maven Central Repository
- Grape uses Ivy for dependency resolution

**Further reading:**
- [Groovy Documentation - Grape](https://groovy-lang.org/grape.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```ruby
# CocoaPods (Podfile)
platform :ios, '13.0'

target 'MyApp' do
  pod 'AFNetworking', '~> 4.0'
  pod 'SDWebImage'
end
```

**Special features:**
- CocoaPods as most popular package manager for ObjC
- Carthage as decentralized alternative
- Swift Package Manager (SPM) also supports ObjC packages
- `Podfile` for CocoaPods, `Cartfile` for Carthage

**Further reading:**
- [CocoaPods](https://cocoapods.org/)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Spago as package manager
-- spago.dhall contains dependencies
-- spago install purescript-effect
-- spago build
```

**Special features:**
- Spago is the standard package manager
- Dhall configuration files
- PureScript package registry on Pursuit

**Further reading:**
- [Spago Documentation](https://github.com/purescript/spago)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
# Packages are referenced via URLs in the app declaration
app "myapp"
    packages { pf: "https://github.com/roc-lang/basic-cli/releases/..." }
    imports [pf.Stdout]
    provides [main] to pf
```

**Special features:**
- Integrated package management
- Content-addressed dependencies (via URLs)
- No separate package manager needed

**Further reading:**
- [Roc Documentation](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="v" label="V">

```v
// Package Manager: vpm
// Installation: v install nedpals.args
// Usage:
import nedpals.args
```

**Special features:**
- `vpm` (V Package Manager) is integrated
- `v install author.package` for installation
- Packages from GitHub or VPM registry
- `v.mod` file for project configuration

**Further reading:**
- [V Documentation - Package Management](https://github.com/vlang/v/blob/master/doc/docs.md#package-management)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// build.zig.zon - Package manifest
// .{
//     .name = "my-project",
//     .version = "0.1.0",
//     .dependencies = .{
//         .@"some-library" = .{
//             .url = "https://github.com/example/lib/archive/v1.0.tar.gz",
//             .hash = "...",
//         },
//     },
// }

// Usage in build.zig
const dep = b.dependency("some-library", .{});
exe.root_module.addImport("some-library", dep.module("some-library"));

// Import in code
const lib = @import("some-library");
```

**Special features:**
- Built-in package manager (since Zig 0.11)
- `build.zig.zon` as package manifest
- `zig fetch` to download dependencies
- Supports URL-based and local dependencies
- Reproducible builds through hash verification

**Further reading:**
- [Zig Build System](https://ziglang.org/documentation/master/#Zig-Build-System)

</TabItem>
</Tabs>


## 15.2.2. Module Resolution

Mechanism for resolving module imports to actual files or code units. Determines how the compiler or interpreter finds and loads modules.

### Languages {#sprachen}

<Tabs availableTabs={['ada', 'carbon', 'clojure', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'elixir', 'elm', 'erlang', 'fortran', 'fsharp', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'mercury', 'mojo', 'nim', 'object-pascal', 'objective-c', 'ocaml', 'odin', 'perl', 'php', 'prolog', 'purescript', 'python', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'v', 'vbnet', 'wolfram-language', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- Searches in current file, then in paths specified with -I
with Math_Utils;  -- Searches for Math_Utils.ads in search paths
use Math_Utils;
```

**Special features:**
- Searches in current file, then in -I paths
- Filename must match module name
- Supports hierarchical search paths

**Further reading:**
- [Ada Documentation - Compilation Units](https://learn.adacore.com/courses/intro-to-ada/chapters/compilation_units.html)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Searches in current file, then in package paths
import MathUtils;  // Searches for MathUtils.carbon
```

**Special features:**
- Searches in current file, then in package paths
- Experimental syntax may still change
- Supports package-based resolution

**Further reading:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Searches in classpath, then in dependencies
(ns my-app
  (:require [math.utils :as math]))  ; Searches for math/utils.clj
```

**Special features:**
- Searches in classpath
- Supports namespace-to-file mapping
- Uses Leiningen/Clojure CLI classpath

**Further reading:**
- [Clojure Documentation - Namespaces](https://clojure.org/reference/namespaces)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Searches in Quicklisp systems, then in ASDF systems
(ql:quickload :math.utils)  ; Searches in Quicklisp
```

**Special features:**
- Searches in Quicklisp systems
- Supports ASDF system definitions
- Uses central system registry

**Further reading:**
- [ASDF Documentation](https://asdf.common-lisp.dev/)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Searches in -I paths, then in standard library paths
#include <iostream>      // Standard library
#include "math_utils.h"  // Local file
```

**Special features:**
- Searches in -I paths for `<>`
- Searches in current file, then in -I paths for `""`
- C++20 modules use module resolution

**Further reading:**
- [cppreference.com - Modules](https://en.cppreference.com/w/cpp/language/modules)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Searches in references, then in NuGet packages
using Math.Utils;  // Searches in assembly references
```

**Special features:**
- Searches in assembly references
- Uses NuGet package resolution
- Supports GAC (Global Assembly Cache)

**Further reading:**
- [Microsoft C# Documentation - Namespaces](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/namespace)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Searches in current file, then in lib/ directory
require "math_utils"  # Searches for lib/math_utils.cr
```

**Special features:**
- Searches in lib/ directory
- Supports relative and absolute paths
- Uses Shards for dependency resolution

**Further reading:**
- [Crystal Documentation - Requiring Files](https://crystal-lang.org/reference/1.11/syntax_and_semantics/requiring_files.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Searches in current file, then in -I paths
import math.utils;  // Searches for math/utils.d
```

**Special features:**
- Searches in -I paths
- Supports package hierarchies
- Uses DUB for dependency resolution

**Further reading:**
- [D Language Specification - Import](https://dlang.org/spec/module.html#import-declaration)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Searches in pub cache, then in local paths
import 'package:math_utils/math_utils.dart';  // Searches in pub cache
import 'math_utils.dart';  // Local file
```

**Special features:**
- Searches in pub cache
- Supports package: and local imports
- Uses pub for dependency resolution

**Further reading:**
- [Dart Documentation - Libraries](https://dart.dev/guides/libraries/create-library-packages)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Searches in Mix dependencies, then in standard library
defmodule MyApp do
  require Math.Utils  # Searches in Mix dependencies
end
```

**Special features:**
- Searches in Mix dependencies
- Uses Hex for remote resolution
- Supports local path dependencies

**Further reading:**
- [Mix Documentation](https://hexdocs.pm/mix/Mix.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Searches in elm-stuff, then in standard library
import Math.Utils  -- Searches for Math/Utils.elm
```

**Special features:**
- Searches in elm-stuff directory
- Module name must match file path
- Uses elm-package for dependency resolution

**Further reading:**
- [Elm Documentation - Modules](https://guide.elm-lang.org/webapps/modules.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
%% Searches in code path, then in standard library
-module(my_app).
-export([result/0]).

result() ->
    math_utils:add(5, 3).  % Searches for math_utils.beam in code path
```

**Special features:**
- Searches in code path
- Uses .beam files for resolution
- Supports OTP application structure

**Further reading:**
- [Erlang Documentation - Code Loading](https://www.erlang.org/doc/man/code.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Searches in assembly references, then in NuGet packages
open Math.Utils  // Searches in assembly references
```

**Special features:**
- Searches in assembly references
- Uses NuGet package resolution
- Supports .NET assembly resolution

**Further reading:**
- [Microsoft F# Documentation - Modules](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/modules)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Searches in current file, then in -I paths
use math_utils  ! Searches for math_utils.mod in search paths
```

**Special features:**
- Searches in -I paths
- Uses .mod files for module information
- Supports hierarchical search paths

**Further reading:**
- [Fortran Wiki - Modules](https://fortranwiki.org/fortran/show/Modules)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Searches in src/ and build/ directories
import math/utils       // Searches for src/math/utils.gleam
import gleam/list       // Searches in gleam_stdlib dependency
```

**Special features:**
- Searches for modules in `src/` directory and in dependencies
- Module name must match file path
- Uses Hex for dependency resolution
- `/` as path separator

**Further reading:**
- [Gleam Documentation - Modules](https://tour.gleam.run/basics/modules/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Searches in GOPATH/mod, then in standard library
import "math/utils"  // Searches in GOPATH/mod
```

**Special features:**
- Searches in GOPATH/mod directory
- Uses go.mod for module resolution
- Supports semantic import versioning

**Further reading:**
- [Go Documentation - Modules](https://go.dev/ref/mod)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Searches in classpath, then in standard library
import math.utils.Calculator  // Searches in classpath
```

**Special features:**
- Searches in classpath
- Uses Maven/Gradle for dependency resolution
- Supports JAR file resolution

**Further reading:**
- [Groovy Documentation - Packages](https://groovy-lang.org/structure.html#_packages)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Searches in package database, then in standard library
import Math.Utils  -- Searches in package database
```

**Special features:**
- Searches in package database
- Uses Cabal/Stack for dependency resolution
- Supports hierarchical module resolution

**Further reading:**
- [Haskell Documentation - Modules](https://www.haskell.org/tutorial/modules.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Searches in classpath, then in standard library
import math.utils.Calculator;  // Searches in classpath
```

**Special features:**
- Searches in classpath
- Uses Haxelib for dependency resolution
- Supports target-specific resolution

**Further reading:**
- [Haxe Documentation - Packages](https://haxe.org/manual/type-system-packages.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Searches in IDRIS_LIBRARY_PATH, then in standard library
import Math.Utils  -- Searches in IDRIS_LIBRARY_PATH
```

**Special features:**
- Searches in IDRIS_LIBRARY_PATH
- Module name must match file path
- Supports package resolution

**Further reading:**
- [Idris Documentation - Modules](https://idris2.readthedocs.io/en/latest/tutorial/modules.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Searches in classpath, then in standard library
import math.utils.Calculator;  // Searches in classpath
```

**Special features:**
- Searches in classpath
- Uses Maven/Gradle for dependency resolution
- Supports JAR file resolution

**Further reading:**
- [Oracle Java Documentation - Packages](https://docs.oracle.com/javase/tutorial/java/package/packages.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Searches in LOAD_PATH, then in standard library
using Math.Utils  # Searches in LOAD_PATH
```

**Special features:**
- Searches in LOAD_PATH
- Uses Pkg for dependency resolution
- Supports package environment resolution

**Further reading:**
- [Julia Documentation - Modules](https://docs.julialang.org/en/v1/manual/modules/)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Searches in current file, then in include paths
import std/core       // Standard library modules
import std/os/path    // Hierarchical modules
import mylib/utils    // Searches in include paths
```

**Special features:**
- Module paths are mapped to directory structure
- Standard library organized under `std/`
- Include paths configurable via `--include` or `koka.json`
- Filename must match module name (`.kk` extension)

**Further reading:**
- [Koka Documentation - Modules](https://koka-lang.github.io/koka/doc/book.html#sec-modules)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Searches in classpath, then in standard library
import math.utils.Calculator  // Searches in classpath
```

**Special features:**
- Searches in classpath
- Uses Maven/Gradle for dependency resolution
- Supports JAR file resolution

**Further reading:**
- [Kotlin Documentation - Packages](https://kotlinlang.org/docs/packages.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Modules are resolved via directory structure
-- import MyLib.Utils → searches for MyLib/Utils.lean
import MyLib.Utils
import Std.Data.HashMap
```

**Special features:**
- Modules are resolved via directory structure (`import A.B.C` → `A/B/C.lean`).
- Lake manages search paths for modules and dependencies.
- Standard library is automatically imported (`Init`).
- `import` loads a module and all its transitive dependencies.

**Further reading:**
- [Lean 4 Documentation - Modules](https://lean-lang.org/lean4/doc/modules.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Searches in package.path, then in standard library
local math_utils = require("math_utils")  -- Searches in package.path
```

**Special features:**
- Searches in package.path
- Supports LuaRocks for dependency resolution
- Uses package.loaded for caching

**Further reading:**
- [Lua Documentation - Modules](https://www.lua.org/manual/5.4/manual.html#6.3)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Searches in --search-directory paths, then in standard library
:- import_module math_utils.  % Searches for math_utils.m in search paths
```

**Special features:**
- Module name is mapped to filename (`math_utils` → `math_utils.m`)
- Sub-modules use dot notation (`math.utils` → `math.utils.m`)
- Search paths configurable via `--search-directory` compiler option
- Standard library is automatically found

**Further reading:**
- [Mercury Language Reference - Modules](https://www.mercurylang.org/information/doc-release/mercury_ref/Modules.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Searches in current file, then in package paths
from math.utils import add  # Searches in package paths
```

**Special features:**
- Searches in package paths
- Python-like resolution
- Supports hierarchical package resolution

**Further reading:**
- [Mojo Documentation - Modules](https://docs.modular.com/mojo/manual/modules/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Searches in current file, then in -p paths
import math.utils  # Searches in -p paths
```

**Special features:**
- Searches in -p paths
- Supports relative and absolute paths
- Uses Nimble for dependency resolution

**Further reading:**
- [Nim Documentation - Modules](https://nim-lang.org/docs/manual.html#modules)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
{ Searches in unit search paths, then in standard library }
uses Math.Utils;  { Searches for Math.Utils.pas in search paths }
```

**Special features:**
- Searches in unit search paths
- Supports hierarchical unit resolution
- Uses compiler options for search paths

**Further reading:**
- [Free Pascal Documentation - Units](https://www.freepascal.org/docs-html/ref/refse5.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Searches in framework search paths, then in standard library
#import <Foundation/Foundation.h>  // Framework
#import "MathUtils.h"  // Local file
```

**Special features:**
- Searches in framework search paths
- Supports @import for module resolution
- Uses CocoaPods for dependency resolution

**Further reading:**
- [Apple Documentation - Modules](https://clang.llvm.org/docs/Modules.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Searches in OCAMLPATH, then in standard library *)
open MathUtils  (* Searches in OCAMLPATH *)
```

**Special features:**
- Searches in OCAMLPATH
- Uses OPAM for dependency resolution
- Supports hierarchical module resolution

**Further reading:**
- [OCaml Documentation - Modules](https://ocaml.org/docs/modules)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Searches in current file, then in package paths
import "math/utils"  // Searches in package paths
```

**Special features:**
- Searches in package paths
- Supports relative and absolute paths
- Uses directory structure for resolution

**Further reading:**
- [Odin Documentation - Packages](https://odin-lang.org/docs/overview/#packages)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Searches in @INC, then in standard library
use Math::Utils;  # Searches in @INC
```

**Special features:**
- Searches in @INC array
- Uses CPAN for dependency resolution
- Supports local::lib for local installations

**Further reading:**
- [Perl Documentation - Packages](https://perldoc.perl.org/perlmod)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Searches in include_path, then in Composer autoload
require 'vendor/autoload.php';  // Composer autoload
use Math\Utils\Calculator;  // Searches in Composer
```

**Special features:**
- Searches in include_path
- Uses Composer autoload for dependency resolution
- Supports PSR-4 autoloading

**Further reading:**
- [PHP Documentation - Autoloading](https://www.php.net/manual/en/language.oop5.autoload.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Searches in library paths, then in local files
:- use_module(library(lists)).       % Standard library
:- use_module(library(http/json)).   % Hierarchical library
:- use_module('math_utils').         % Local file
```

**Special features:**
- `library()` wrapper searches in registered library paths
- `file_search_path/2` defines configurable search paths
- Direct file paths (relative or absolute) are supported
- Standard libraries are shipped with SWI-Prolog

**Further reading:**
- [SWI-Prolog Documentation - Modules](https://www.swi-prolog.org/pldoc/man?section=modules)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Searches in bower_components/spago_packages, then in standard library
import Math.Utils  -- Searches in spago_packages
```

**Special features:**
- Searches in spago_packages directory
- Module name must match file path
- Uses Spago/Bower for dependency resolution

**Further reading:**
- [PureScript Documentation - Modules](https://book.purescript.org/chapter3.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Searches in sys.path, then in standard library
import math.utils  # Searches in sys.path
```

**Special features:**
- Searches in sys.path
- Uses pip for dependency resolution
- Supports virtual environments

**Further reading:**
- [Python Documentation - Modules](https://docs.python.org/3/tutorial/modules.html)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
#lang racket

;; Searches in collections, then in standard library
(require "math-utils.rkt")  ; Local file
(require math/utils)  ; Searches in collections
```

**Special features:**
- Searches in collections directory
- Uses Racket Package Manager for dependency resolution
- Supports hierarchical collection resolution

**Further reading:**
- [Racket Documentation - Modules](https://docs.racket-lang.org/guide/modules.html)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
# Modules are resolved by filename
# imports [ModuleName] searches for ModuleName.roc
```

**Special features:**
- Module name must match filename
- Searches in local files and package paths
- Supports qualified imports

**Further reading:**
- [Roc Documentation - Modules](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Searches in $LOAD_PATH, then in standard library
require 'math_utils'  # Searches in $LOAD_PATH
```

**Special features:**
- Searches in $LOAD_PATH
- Uses Bundler for dependency resolution
- Supports gem resolution

**Further reading:**
- [Ruby Documentation - Modules](https://docs.ruby-lang.org/en/3.2/syntax/modules_and_classes_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Searches in Cargo dependencies, then in standard library
use math_utils::add;  // Searches in Cargo dependencies
```

**Special features:**
- Searches in Cargo dependencies
- Uses Cargo for dependency resolution
- Supports crate resolution

**Further reading:**
- [Rust Documentation - Modules](https://doc.rust-lang.org/book/ch07-02-defining-modules-to-control-scope-and-privacy.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Searches in classpath, then in standard library
import math.utils.Calculator  // Searches in classpath
```

**Special features:**
- Searches in classpath
- Uses sbt/Maven for dependency resolution
- Supports JAR file resolution

**Further reading:**
- [Scala Documentation - Packages](https://docs.scala-lang.org/tour/packages.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Searches in implementation-specific library path
(import (math utils))  ; Searches in library path
```

**Special features:**
- R7RS: `import` searches in implementation-specific library path
- Hierarchical library names are mapped to filesystem paths
- Resolution is implementation-dependent

**Further reading:**
- [R7RS Scheme - Libraries](https://small.r7rs.org/attachment/r7rs.pdf)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Searches in Swift Package dependencies, then in standard library
import MathUtils  // Searches in Swift Package dependencies
```

**Special features:**
- Searches in Swift Package dependencies
- Uses Swift Package Manager for dependency resolution
- Supports module resolution

**Further reading:**
- [Swift Documentation - Modules](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/accesscontrol/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Searches in node_modules, then in standard library
import { add } from 'math-utils';  // Searches in node_modules
```

**Special features:**
- Searches in node_modules
- Uses npm/yarn for dependency resolution
- Supports TypeScript-specific resolution

**Further reading:**
- [TypeScript Documentation - Module Resolution](https://www.typescriptlang.org/docs/handbook/module-resolution.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Searches in assembly references, then in NuGet packages
Imports Math.Utils  ' Searches in assembly references
```

**Special features:**
- Searches in assembly references
- Uses NuGet for dependency resolution
- Supports .NET assembly resolution

**Further reading:**
- [Microsoft VB.NET Documentation - Namespaces](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/program-structure/namespaces)

</TabItem>
<TabItem value="v" label="V">

```v
// Searches in current file, then in module paths
import math.utils  // Searches in module paths
```

**Special features:**
- Searches in module paths
- Module name matches directory name
- Supports hierarchical module resolution

**Further reading:**
- [V Documentation - Modules](https://github.com/vlang/v/blob/master/doc/docs.md#modules)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
(* Searches in $Path, then in standard library *)
Needs["Math`Utils`"]  (* Searches in $Path *)
```

**Special features:**
- Searches in $Path
- Uses Paclet Manager for dependency resolution
- Supports package resolution

**Further reading:**
- [Wolfram Language Documentation - Packages](https://reference.wolfram.com/language/guide/Packages.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Searches in current file, then in build.zig dependencies
const math_utils = @import("math_utils.zig");  // Local file
```

**Special features:**
- Searches in current file, then in build.zig dependencies
- Supports relative and absolute paths
- Uses build system for dependency resolution

**Further reading:**
- [Zig Documentation - Source Files](https://ziglang.org/documentation/0.11.0/#Source-Encoding)

</TabItem>
</Tabs>

