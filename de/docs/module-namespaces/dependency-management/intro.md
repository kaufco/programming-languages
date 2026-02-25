---
slug: /module-namespaces/dependency-management
title: 15.2. Dependency Management
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 15.2. Dependency Management

Verwaltung von Abhängigkeiten.

## 15.2.1. Package Managers

Tools zur Verwaltung von Abhängigkeiten und Bibliotheken. Package Managers ermöglichen das Installieren, Aktualisieren und Verwalten von externen Code-Bibliotheken.

### Sprachen {#sprachen}

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

**Besonderheiten:**
- Leiningen und Clojure CLI sind die Haupt-Package-Manager
- Nutzt Maven-Repositories
- Unterstützt lokale und Remote-Dependencies

**Weiterführende Links:**
- [Leiningen Documentation](https://leiningen.org/)
- [Clojure CLI Tools](https://clojure.org/guides/deps_and_cli)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; quicklisp.lisp
(ql:quickload "cl-ppcre")
(ql:quickload "drakma")
```

**Besonderheiten:**
- Quicklisp ist der Haupt-Package-Manager
- Unterstützt System-Definitionen
- Nutzt zentrale Repository-Struktur

**Weiterführende Links:**
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

**Besonderheiten:**
- Shards ist der Package-Manager
- Nutzt Git-Repositories
- Unterstützt Version-Constraints

**Weiterführende Links:**
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

**Besonderheiten:**
- DUB ist der Package-Manager
- Nutzt JSON-Konfiguration
- Unterstützt zentrale Package-Registry

**Weiterführende Links:**
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

**Besonderheiten:**
- Pub ist der Package-Manager
- Nutzt pub.dev als zentrale Registry
- Unterstützt Version-Constraints mit `^`

**Weiterführende Links:**
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

**Besonderheiten:**
- Mix ist der Package-Manager
- Nutzt Hex als zentrale Registry
- Unterstützt Git- und Path-Dependencies

**Weiterführende Links:**
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

**Besonderheiten:**
- Rebar3 ist der Haupt-Package-Manager
- Nutzt Hex als zentrale Registry
- Unterstützt OTP Applications

**Weiterführende Links:**
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

**Besonderheiten:**
- Go Modules ist der Package-Manager
- Nutzt Git-Repositories direkt
- Unterstützt Semantic Versioning

**Weiterführende Links:**
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

**Besonderheiten:**
- Cabal ist der Package-Manager
- Nutzt Hackage als zentrale Registry
- Unterstützt Stack als Alternative

**Weiterführende Links:**
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

**Besonderheiten:**
- Haxelib ist der Package-Manager
- Nutzt haxelib.org als zentrale Registry
- Unterstützt Git-Repositories

**Weiterführende Links:**
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

**Besonderheiten:**
- Maven und Gradle sind die Haupt-Package-Manager
- Nutzt Maven Central Repository
- Unterstützt transitive Dependencies

**Weiterführende Links:**
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

**Besonderheiten:**
- npm und yarn sind die Haupt-Package-Manager
- Nutzt npmjs.com als zentrale Registry
- Unterstützt Semantic Versioning

**Weiterführende Links:**
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

**Besonderheiten:**
- Pkg ist der Package-Manager
- Nutzt Julia General Registry
- Unterstützt Git-Repositories

**Weiterführende Links:**
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

**Besonderheiten:**
- Gradle und Maven sind die Haupt-Package-Manager
- Nutzt Maven Central Repository
- Unterstützt Kotlin Multiplatform

**Weiterführende Links:**
- [Kotlin Documentation](https://kotlinlang.org/docs/gradle.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- lakefile.lean (Lake Build-System und Package Manager)
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

**Besonderheiten:**
- Lake ist der offizielle Build-System und Package-Manager für Lean 4.
- `lakefile.lean` definiert Abhängigkeiten, Targets und Build-Konfiguration.
- `require` importiert externe Pakete (z.B. von GitHub).
- `lake build`, `lake update` und `lake env` sind die Hauptbefehle.

**Weiterführende Links:**
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

**Besonderheiten:**
- LuaRocks ist der Package-Manager
- Nutzt luarocks.org als zentrale Registry
- Unterstützt verschiedene Lua-Versionen

**Weiterführende Links:**
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

**Besonderheiten:**
- Nimble ist der offizielle Package-Manager
- `.nimble`-Dateien mit Nim-ähnlicher DSL-Syntax
- Nutzt nimble.directory als zentrale Registry
- Unterstützt Git-Repositories als Abhängigkeiten

**Weiterführende Links:**
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

**Besonderheiten:**
- OPAM ist der Package-Manager
- Nutzt opam.ocaml.org als zentrale Registry
- Unterstützt Switch-basierte Installation

**Weiterführende Links:**
- [OPAM Documentation](https://opam.ocaml.org/doc/)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# cpanfile
requires 'Mojolicious' => '9.0';
requires 'DBI' => '1.643';
```

**Besonderheiten:**
- CPAN ist der Package-Manager
- Nutzt cpan.org als zentrale Registry
- Unterstützt cpanm als Alternative

**Weiterführende Links:**
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

**Besonderheiten:**
- Composer ist der Package-Manager
- Nutzt packagist.org als zentrale Registry
- Unterstützt Autoloading

**Weiterführende Links:**
- [Composer Documentation](https://getcomposer.org/doc/)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% SWI-Prolog Pack Manager
% Installation: ?- pack_install(http_client).
% Deinstallation: ?- pack_remove(http_client).

?- pack_install(mavis).
?- pack_install(list_util).

% Pakete suchen
?- pack_search(json).

% Alle installierten Pakete auflisten
?- pack_list_installed.
```

**Besonderheiten:**
- SWI-Prolog hat einen eingebauten Pack-Manager (`pack_install/1`)
- Zentrale Registry auf pack.swi-prolog.org
- Unterstützt Git-Repositories als Quellen
- Packs werden in `~/.local/share/swi-prolog/pack/` installiert

**Weiterführende Links:**
- [SWI-Prolog Pack Documentation](https://www.swi-prolog.org/pack/list)

</TabItem>
<TabItem value="python" label="Python">

```text
# requirements.txt
requests==2.31.0
numpy>=1.24.0
pandas~=2.0.0
```

**Besonderheiten:**
- pip ist der Package-Manager
- Nutzt PyPI als zentrale Registry
- Unterstützt virtual environments

**Weiterführende Links:**
- [pip Documentation](https://pip.pypa.io/)

</TabItem>
<TabItem value="r" label="R">

```r
# DESCRIPTION
Package: my-app
Depends: R (>= 4.0.0)
Imports: dplyr (>= 1.0.0), ggplot2 (>= 3.0.0)
```

**Besonderheiten:**
- CRAN ist die zentrale Registry
- Nutzt install.packages() für Installation
- Unterstützt Bioconductor als Alternative

**Weiterführende Links:**
- [CRAN Documentation](https://cran.r-project.org/)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
#lang info
(define collection "my-app")
(define deps '("base" "rackunit"))
```

**Besonderheiten:**
- Racket Package Manager ist integriert
- Nutzt package server als zentrale Registry
- Unterstützt lokale Packages

**Weiterführende Links:**
- [Racket Package Documentation](https://docs.racket-lang.org/pkg/index.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Gemfile
source 'https://rubygems.org'

gem 'rails', '~> 7.0'
gem 'pg', '~> 1.4'
```

**Besonderheiten:**
- Bundler ist der Package-Manager
- Nutzt rubygems.org als zentrale Registry
- Unterstützt Gemfile für Dependency-Management

**Weiterführende Links:**
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

**Besonderheiten:**
- Cargo ist der Package-Manager
- Nutzt crates.io als zentrale Registry
- Unterstützt Feature-Flags

**Weiterführende Links:**
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

**Besonderheiten:**
- sbt und Maven sind die Haupt-Package-Manager
- Nutzt Maven Central Repository
- Unterstützt Scala-Version-spezifische Dependencies

**Weiterführende Links:**
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

**Besonderheiten:**
- Swift Package Manager ist integriert
- Nutzt Git-Repositories direkt
- Unterstützt Semantic Versioning

**Weiterführende Links:**
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

**Besonderheiten:**
- Nutzt npm/yarn wie JavaScript
- Unterstützt @types Packages für Typ-Definitionen
- Unterstützt TypeScript-spezifische Tools

**Weiterführende Links:**
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

**Besonderheiten:**
- Paclet Manager ist integriert
- Nutzt Wolfram Paclet Repository
- Unterstützt Package-Dependencies

**Weiterführende Links:**
- [Wolfram Paclet Documentation](https://reference.wolfram.com/language/guide/Paclets.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// NuGet: .NET Package Manager
// Paketinstallation via CLI:
// dotnet add package Newtonsoft.Json
// dotnet add package Microsoft.EntityFrameworkCore --version 8.0.0

// Projektdatei (.csproj) enthält Paket-Referenzen:
// <PackageReference Include="Newtonsoft.Json" Version="13.0.3" />

// Benötigt: using Newtonsoft.Json;
var json = JsonConvert.SerializeObject(new { Name = "Alice" });

// Paketwiederherstellung:
// dotnet restore
```

**Besonderheiten:**
- NuGet ist der Standard-Paketmanager für .NET/C#
- Paketdefinition in `.csproj` Dateien (PackageReference-Format)
- CLI-Befehle: `dotnet add package`, `dotnet restore`, `dotnet nuget`
- Zentrales Repository: nuget.org

**Weiterführende Links:**
- [Microsoft NuGet Documentation](https://learn.microsoft.com/en-us/nuget/)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Installation: elm install elm/json
-- Deinstallation: Manuelles Entfernen aus elm.json

-- elm.json (Auszug)
-- {
--     "dependencies": {
--         "direct": {
--             "elm/core": "1.0.5",
--             "elm/json": "1.1.3"
--         }
--     }
-- }
```

**Besonderheiten:**
- `elm install <package>` installiert Packages
- Packages werden in `elm.json` verwaltet
- Semantische Versionierung wird automatisch vom Compiler geprüft
- Zentrale Registry: https://package.elm-lang.org

**Weiterführende Links:**
- [Elm Documentation - Install](https://guide.elm-lang.org/install/elm.html)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! fpm.toml (Fortran Package Manager Konfiguration)
! name = "my_project"
! version = "0.1.0"
! [dependencies]
! stdlib = "*"

! Installation: fpm build
! Ausführung: fpm run

program main
    use stdlib_string_type
    implicit none
end program
```

**Besonderheiten:**
- Fortran Package Manager (FPM) als offizieller Package Manager
- TOML-basierte Konfiguration (fpm.toml)
- Unterstützt Abhängigkeiten von Git-Repositories und dem fpm-Registry

**Weiterführende Links:**
- [Fortran Package Manager (FPM)](https://fpm.fortran-lang.org/)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// gleam.toml - Package-Konfiguration
// [dependencies]
// gleam_stdlib = ">= 0.34.0 and < 2.0.0"
// gleam_otp = ">= 0.7.0 and < 1.0.0"

// Befehle:
// gleam add paket_name
// gleam deps download
```

**Besonderheiten:**
- Integrierter Package Manager im `gleam`-Build-Tool
- Nutzt Hex-Registry für Pakete
- `gleam.toml` für Konfiguration
- `gleam add` für Abhängigkeiten

**Weiterführende Links:**
- [Gleam Documentation - Packages](https://gleam.run/documentation/tour/packages/)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Grape: Groovys eingebauter Dependency Manager
@Grab('org.apache.commons:commons-lang3:3.12.0')
import org.apache.commons.lang3.StringUtils

println StringUtils.capitalize("hello") // "Hello"

// Gradle (build.gradle) oder Maven (pom.xml) für Projektabhängigkeiten
// Gradle ist selbst in Groovy geschrieben
```

**Besonderheiten:**
- `@Grab` Annotation für Inline-Dependency-Management (Grape)
- Gradle (Groovy-basiert) als primärer Build-Tool
- Maven-Kompatibilität über Maven Central Repository
- Grape nutzt Ivy für Dependency Resolution

**Weiterführende Links:**
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

**Besonderheiten:**
- CocoaPods als populärster Package Manager für ObjC
- Carthage als dezentrale Alternative
- Swift Package Manager (SPM) unterstützt auch ObjC-Packages
- `Podfile` für CocoaPods, `Cartfile` für Carthage

**Weiterführende Links:**
- [CocoaPods](https://cocoapods.org/)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Spago als Package Manager
-- spago.dhall enthält Dependencies
-- spago install purescript-effect
-- spago build
```

**Besonderheiten:**
- Spago ist der Standard-Package-Manager
- Dhall-Konfigurationsdateien
- PureScript Package Registry auf Pursuit

**Weiterführende Links:**
- [Spago Documentation](https://github.com/purescript/spago)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
# Packages werden über URLs in der app-Deklaration referenziert
app "myapp"
    packages { pf: "https://github.com/roc-lang/basic-cli/releases/..." }
    imports [pf.Stdout]
    provides [main] to pf
```

**Besonderheiten:**
- Integriertes Package-Management
- Content-addressed Dependencies (über URLs)
- Kein separater Package Manager nötig

**Weiterführende Links:**
- [Roc Documentation](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="v" label="V">

```v
// Package Manager: vpm
// Installation: v install nedpals.args
// Verwendung:
import nedpals.args
```

**Besonderheiten:**
- `vpm` (V Package Manager) ist integriert
- `v install author.package` für Installation
- Packages von GitHub oder VPM-Registry
- `v.mod` Datei für Projektkonfiguration

**Weiterführende Links:**
- [V Documentation - Package Management](https://github.com/vlang/v/blob/master/doc/docs.md#package-management)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// build.zig.zon - Package-Manifest
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

// Verwendung in build.zig
const dep = b.dependency("some-library", .{});
exe.root_module.addImport("some-library", dep.module("some-library"));

// Import im Code
const lib = @import("some-library");
```

**Besonderheiten:**
- Eingebauter Package Manager (seit Zig 0.11)
- `build.zig.zon` als Package-Manifest
- `zig fetch` zum Herunterladen von Dependencies
- Unterstützt URL-basierte und lokale Dependencies
- Reproduzierbare Builds durch Hash-Verifizierung

**Weiterführende Links:**
- [Zig Build System](https://ziglang.org/documentation/master/#Zig-Build-System)

</TabItem>
</Tabs>


## 15.2.2. Module Resolution

Mechanismus zur Auflösung von Modul-Imports zu tatsächlichen Dateien oder Code-Einheiten. Bestimmt, wie der Compiler oder Interpreter Module findet und lädt.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'carbon', 'clojure', 'common-lisp', 'cpp', 'crystal', 'csharp', 'd', 'dart', 'elixir', 'elm', 'erlang', 'fortran', 'fsharp', 'gleam', 'go', 'groovy', 'haskell', 'haxe', 'idris', 'java', 'julia', 'koka', 'kotlin', 'lean4', 'lua', 'mercury', 'mojo', 'nim', 'object-pascal', 'objective-c', 'ocaml', 'odin', 'perl', 'php', 'prolog', 'purescript', 'python', 'racket', 'roc', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'v', 'vbnet', 'wolfram-language', 'zig']}>
<TabItem value="ada" label="Ada">

```ada
-- Sucht in aktueller Datei, dann in mit -I angegebenen Pfaden
with Math_Utils;  -- Sucht Math_Utils.ads in Suchpfaden
use Math_Utils;
```

**Besonderheiten:**
- Sucht in aktueller Datei, dann in -I Pfaden
- Dateiname muss Modulname entsprechen
- Unterstützt hierarchische Suchpfade

**Weiterführende Links:**
- [Ada Documentation - Compilation Units](https://learn.adacore.com/courses/intro-to-ada/chapters/compilation_units.html)

</TabItem>
<TabItem value="carbon" label="Carbon">

```cpp
// Sucht in aktueller Datei, dann in Package-Pfaden
import MathUtils;  // Sucht MathUtils.carbon
```

**Besonderheiten:**
- Sucht in aktueller Datei, dann in Package-Pfaden
- Experimentelle Syntax kann sich noch ändern
- Unterstützt Package-basierte Resolution

**Weiterführende Links:**
- [Carbon Language Documentation](https://github.com/carbon-language/carbon-lang)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; Sucht in classpath, dann in dependencies
(ns my-app
  (:require [math.utils :as math]))  ; Sucht math/utils.clj
```

**Besonderheiten:**
- Sucht in classpath
- Unterstützt Namespace-zu-Datei-Mapping
- Nutzt Leiningen/Clojure CLI classpath

**Weiterführende Links:**
- [Clojure Documentation - Namespaces](https://clojure.org/reference/namespaces)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Sucht in Quicklisp-Systemen, dann in ASDF-Systemen
(ql:quickload :math.utils)  ; Sucht in Quicklisp
```

**Besonderheiten:**
- Sucht in Quicklisp-Systemen
- Unterstützt ASDF-System-Definitionen
- Nutzt zentrale System-Registry

**Weiterführende Links:**
- [ASDF Documentation](https://asdf.common-lisp.dev/)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Sucht in -I Pfaden, dann in Standard-Library-Pfaden
#include <iostream>      // Standard-Library
#include "math_utils.h"  // Lokale Datei
```

**Besonderheiten:**
- Sucht in -I Pfaden für `<>`
- Sucht in aktueller Datei, dann in -I Pfaden für `""`
- C++20 Module nutzen Module-Resolution

**Weiterführende Links:**
- [cppreference.com - Modules](https://en.cppreference.com/w/cpp/language/modules)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Sucht in Referenzen, dann in NuGet-Packages
using Math.Utils;  // Sucht in Assembly-Referenzen
```

**Besonderheiten:**
- Sucht in Assembly-Referenzen
- Nutzt NuGet-Package-Resolution
- Unterstützt GAC (Global Assembly Cache)

**Weiterführende Links:**
- [Microsoft C# Documentation - Namespaces](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/namespace)

</TabItem>
<TabItem value="crystal" label="Crystal">

```crystal
# Sucht in aktueller Datei, dann in lib/ Verzeichnis
require "math_utils"  # Sucht lib/math_utils.cr
```

**Besonderheiten:**
- Sucht in lib/ Verzeichnis
- Unterstützt relative und absolute Pfade
- Nutzt Shards für Dependency-Resolution

**Weiterführende Links:**
- [Crystal Documentation - Requiring Files](https://crystal-lang.org/reference/1.11/syntax_and_semantics/requiring_files.html)

</TabItem>
<TabItem value="d" label="D">

```d
// Sucht in aktueller Datei, dann in -I Pfaden
import math.utils;  // Sucht math/utils.d
```

**Besonderheiten:**
- Sucht in -I Pfaden
- Unterstützt Package-Hierarchien
- Nutzt DUB für Dependency-Resolution

**Weiterführende Links:**
- [D Language Specification - Import](https://dlang.org/spec/module.html#import-declaration)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Sucht in pub cache, dann in lokalen Pfaden
import 'package:math_utils/math_utils.dart';  // Sucht in pub cache
import 'math_utils.dart';  // Lokale Datei
```

**Besonderheiten:**
- Sucht in pub cache
- Unterstützt package: und lokale Imports
- Nutzt pub für Dependency-Resolution

**Weiterführende Links:**
- [Dart Documentation - Libraries](https://dart.dev/guides/libraries/create-library-packages)

</TabItem>
<TabItem value="elixir" label="Elixir">

```elixir
# Sucht in Mix-Dependencies, dann in Standard-Library
defmodule MyApp do
  require Math.Utils  # Sucht in Mix-Dependencies
end
```

**Besonderheiten:**
- Sucht in Mix-Dependencies
- Nutzt Hex für Remote-Resolution
- Unterstützt lokale Path-Dependencies

**Weiterführende Links:**
- [Mix Documentation](https://hexdocs.pm/mix/Mix.html)

</TabItem>
<TabItem value="elm" label="Elm">

```elm
-- Sucht in elm-stuff, dann in Standard-Library
import Math.Utils  -- Sucht Math/Utils.elm
```

**Besonderheiten:**
- Sucht in elm-stuff Verzeichnis
- Modulname muss Dateipfad entsprechen
- Nutzt elm-package für Dependency-Resolution

**Weiterführende Links:**
- [Elm Documentation - Modules](https://guide.elm-lang.org/webapps/modules.html)

</TabItem>
<TabItem value="erlang" label="Erlang">

```erlang
%% Sucht in code path, dann in Standard-Library
-module(my_app).
-export([result/0]).

result() ->
    math_utils:add(5, 3).  % Sucht math_utils.beam in code path
```

**Besonderheiten:**
- Sucht in code path
- Nutzt .beam-Dateien für Resolution
- Unterstützt OTP-Application-Struktur

**Weiterführende Links:**
- [Erlang Documentation - Code Loading](https://www.erlang.org/doc/man/code.html)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// Sucht in Assembly-Referenzen, dann in NuGet-Packages
open Math.Utils  // Sucht in Assembly-Referenzen
```

**Besonderheiten:**
- Sucht in Assembly-Referenzen
- Nutzt NuGet-Package-Resolution
- Unterstützt .NET Assembly-Resolution

**Weiterführende Links:**
- [Microsoft F# Documentation - Modules](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/modules)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Sucht in aktueller Datei, dann in -I Pfaden
use math_utils  ! Sucht math_utils.mod in Suchpfaden
```

**Besonderheiten:**
- Sucht in -I Pfaden
- Nutzt .mod-Dateien für Module-Information
- Unterstützt hierarchische Suchpfade

**Weiterführende Links:**
- [Fortran Wiki - Modules](https://fortranwiki.org/fortran/show/Modules)

</TabItem>
<TabItem value="gleam" label="Gleam">

```gleam
// Sucht in src/ und build/ Verzeichnissen
import math/utils       // Sucht src/math/utils.gleam
import gleam/list       // Sucht in gleam_stdlib Dependency
```

**Besonderheiten:**
- Sucht Module im `src/` Verzeichnis und in Dependencies
- Modulname muss dem Dateipfad entsprechen
- Nutzt Hex für Dependency-Resolution
- `/` als Pfadseparator

**Weiterführende Links:**
- [Gleam Documentation - Modules](https://tour.gleam.run/basics/modules/)

</TabItem>
<TabItem value="go" label="Go">

```go
// Sucht in GOPATH/mod, dann in Standard-Library
import "math/utils"  // Sucht in GOPATH/mod
```

**Besonderheiten:**
- Sucht in GOPATH/mod Verzeichnis
- Nutzt go.mod für Module-Resolution
- Unterstützt Semantic Import Versioning

**Weiterführende Links:**
- [Go Documentation - Modules](https://go.dev/ref/mod)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
// Sucht in classpath, dann in Standard-Library
import math.utils.Calculator  // Sucht in classpath
```

**Besonderheiten:**
- Sucht in classpath
- Nutzt Maven/Gradle für Dependency-Resolution
- Unterstützt JAR-Datei-Resolution

**Weiterführende Links:**
- [Groovy Documentation - Packages](https://groovy-lang.org/structure.html#_packages)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Sucht in Package-Datenbank, dann in Standard-Library
import Math.Utils  -- Sucht in Package-Datenbank
```

**Besonderheiten:**
- Sucht in Package-Datenbank
- Nutzt Cabal/Stack für Dependency-Resolution
- Unterstützt hierarchische Module-Resolution

**Weiterführende Links:**
- [Haskell Documentation - Modules](https://www.haskell.org/tutorial/modules.html)

</TabItem>
<TabItem value="haxe" label="Haxe">

```haxe
// Sucht in classpath, dann in Standard-Library
import math.utils.Calculator;  // Sucht in classpath
```

**Besonderheiten:**
- Sucht in classpath
- Nutzt Haxelib für Dependency-Resolution
- Unterstützt Target-spezifische Resolution

**Weiterführende Links:**
- [Haxe Documentation - Packages](https://haxe.org/manual/type-system-packages.html)

</TabItem>
<TabItem value="idris" label="Idris">

```idris
-- Sucht in IDRIS_LIBRARY_PATH, dann in Standard-Library
import Math.Utils  -- Sucht in IDRIS_LIBRARY_PATH
```

**Besonderheiten:**
- Sucht in IDRIS_LIBRARY_PATH
- Modulname muss Dateipfad entsprechen
- Unterstützt Package-Resolution

**Weiterführende Links:**
- [Idris Documentation - Modules](https://idris2.readthedocs.io/en/latest/tutorial/modules.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Sucht in classpath, dann in Standard-Library
import math.utils.Calculator;  // Sucht in classpath
```

**Besonderheiten:**
- Sucht in classpath
- Nutzt Maven/Gradle für Dependency-Resolution
- Unterstützt JAR-Datei-Resolution

**Weiterführende Links:**
- [Oracle Java Documentation - Packages](https://docs.oracle.com/javase/tutorial/java/package/packages.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Sucht in LOAD_PATH, dann in Standard-Library
using Math.Utils  # Sucht in LOAD_PATH
```

**Besonderheiten:**
- Sucht in LOAD_PATH
- Nutzt Pkg für Dependency-Resolution
- Unterstützt Package-Environment-Resolution

**Weiterführende Links:**
- [Julia Documentation - Modules](https://docs.julialang.org/en/v1/manual/modules/)

</TabItem>
<TabItem value="koka" label="Koka">

```kotlin
// Sucht in aktueller Datei, dann in Include-Pfaden
import std/core       // Standard-Library-Module
import std/os/path    // Hierarchische Module
import mylib/utils    // Sucht in Include-Pfaden
```

**Besonderheiten:**
- Modulpfade werden auf Verzeichnisstruktur abgebildet
- Standard-Library unter `std/` organisiert
- Include-Pfade über `--include` oder `koka.json` konfigurierbar
- Dateiname muss dem Modulnamen entsprechen (`.kk` Endung)

**Weiterführende Links:**
- [Koka Documentation - Modules](https://koka-lang.github.io/koka/doc/book.html#sec-modules)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Sucht in classpath, dann in Standard-Library
import math.utils.Calculator  // Sucht in classpath
```

**Besonderheiten:**
- Sucht in classpath
- Nutzt Maven/Gradle für Dependency-Resolution
- Unterstützt JAR-Datei-Resolution

**Weiterführende Links:**
- [Kotlin Documentation - Packages](https://kotlinlang.org/docs/packages.html)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Module werden über Verzeichnisstruktur aufgelöst
-- import MyLib.Utils → sucht MyLib/Utils.lean
import MyLib.Utils
import Std.Data.HashMap
```

**Besonderheiten:**
- Module werden über Verzeichnisstruktur aufgelöst (`import A.B.C` → `A/B/C.lean`).
- Lake verwaltet die Suchpfade für Module und Abhängigkeiten.
- Standard-Library wird automatisch importiert (`Init`).
- `import` lädt ein Modul und alle seine transitiven Abhängigkeiten.

**Weiterführende Links:**
- [Lean 4 Documentation - Modules](https://lean-lang.org/lean4/doc/modules.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Sucht in package.path, dann in Standard-Library
local math_utils = require("math_utils")  -- Sucht in package.path
```

**Besonderheiten:**
- Sucht in package.path
- Unterstützt LuaRocks für Dependency-Resolution
- Nutzt package.loaded für Caching

**Weiterführende Links:**
- [Lua Documentation - Modules](https://www.lua.org/manual/5.4/manual.html#6.3)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Sucht in --search-directory Pfaden, dann in Standard-Library
:- import_module math_utils.  % Sucht math_utils.m in Suchpfaden
```

**Besonderheiten:**
- Modulname wird auf Dateinamen abgebildet (`math_utils` → `math_utils.m`)
- Sub-Module nutzen Punkt-Notation (`math.utils` → `math.utils.m`)
- Suchpfade über `--search-directory` Compiler-Option konfigurierbar
- Standard-Library wird automatisch gefunden

**Weiterführende Links:**
- [Mercury Language Reference - Modules](https://www.mercurylang.org/information/doc-release/mercury_ref/Modules.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Sucht in aktueller Datei, dann in Package-Pfaden
from math.utils import add  # Sucht in Package-Pfaden
```

**Besonderheiten:**
- Sucht in Package-Pfaden
- Python-ähnliche Resolution
- Unterstützt hierarchische Package-Resolution

**Weiterführende Links:**
- [Mojo Documentation - Modules](https://docs.modular.com/mojo/manual/modules/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Sucht in aktueller Datei, dann in -p Pfaden
import math.utils  # Sucht in -p Pfaden
```

**Besonderheiten:**
- Sucht in -p Pfaden
- Unterstützt relative und absolute Pfade
- Nutzt Nimble für Dependency-Resolution

**Weiterführende Links:**
- [Nim Documentation - Modules](https://nim-lang.org/docs/manual.html#modules)

</TabItem>
<TabItem value="object-pascal" label="Object Pascal">

```pascal
{ Sucht in Unit-Suchpfaden, dann in Standard-Library }
uses Math.Utils;  { Sucht Math.Utils.pas in Suchpfaden }
```

**Besonderheiten:**
- Sucht in Unit-Suchpfaden
- Unterstützt hierarchische Unit-Resolution
- Nutzt Compiler-Optionen für Suchpfade

**Weiterführende Links:**
- [Free Pascal Documentation - Units](https://www.freepascal.org/docs-html/ref/refse5.html)

</TabItem>
<TabItem value="objective-c" label="Objective-C">

```objc
// Sucht in Framework-Suchpfaden, dann in Standard-Library
#import <Foundation/Foundation.h>  // Framework
#import "MathUtils.h"  // Lokale Datei
```

**Besonderheiten:**
- Sucht in Framework-Suchpfaden
- Unterstützt @import für Module-Resolution
- Nutzt CocoaPods für Dependency-Resolution

**Weiterführende Links:**
- [Apple Documentation - Modules](https://clang.llvm.org/docs/Modules.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Sucht in OCAMLPATH, dann in Standard-Library *)
open MathUtils  (* Sucht in OCAMLPATH *)
```

**Besonderheiten:**
- Sucht in OCAMLPATH
- Nutzt OPAM für Dependency-Resolution
- Unterstützt hierarchische Module-Resolution

**Weiterführende Links:**
- [OCaml Documentation - Modules](https://ocaml.org/docs/modules)

</TabItem>
<TabItem value="odin" label="Odin">

```odin
// Sucht in aktueller Datei, dann in Package-Pfaden
import "math/utils"  // Sucht in Package-Pfaden
```

**Besonderheiten:**
- Sucht in Package-Pfaden
- Unterstützt relative und absolute Pfade
- Nutzt Verzeichnisstruktur für Resolution

**Weiterführende Links:**
- [Odin Documentation - Packages](https://odin-lang.org/docs/overview/#packages)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
# Sucht in @INC, dann in Standard-Library
use Math::Utils;  # Sucht in @INC
```

**Besonderheiten:**
- Sucht in @INC Array
- Nutzt CPAN für Dependency-Resolution
- Unterstützt lokale::lib für lokale Installationen

**Weiterführende Links:**
- [Perl Documentation - Packages](https://perldoc.perl.org/perlmod)

</TabItem>
<TabItem value="php" label="PHP">

```php
<?php
// Sucht in include_path, dann in Composer autoload
require 'vendor/autoload.php';  // Composer autoload
use Math\Utils\Calculator;  // Sucht in Composer
```

**Besonderheiten:**
- Sucht in include_path
- Nutzt Composer autoload für Dependency-Resolution
- Unterstützt PSR-4 Autoloading

**Weiterführende Links:**
- [PHP Documentation - Autoloading](https://www.php.net/manual/en/language.oop5.autoload.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Sucht in Library-Pfaden, dann in lokalen Dateien
:- use_module(library(lists)).       % Standard-Library
:- use_module(library(http/json)).   % Hierarchische Library
:- use_module('math_utils').         % Lokale Datei
```

**Besonderheiten:**
- `library()` Wrapper sucht in registrierten Library-Pfaden
- `file_search_path/2` definiert konfigurierbare Suchpfade
- Direkte Dateipfade (relativ oder absolut) werden unterstützt
- Standard-Libraries werden mit SWI-Prolog ausgeliefert

**Weiterführende Links:**
- [SWI-Prolog Documentation - Modules](https://www.swi-prolog.org/pldoc/man?section=modules)

</TabItem>
<TabItem value="purescript" label="PureScript">

```purescript
-- Sucht in bower_components/spago_packages, dann in Standard-Library
import Math.Utils  -- Sucht in spago_packages
```

**Besonderheiten:**
- Sucht in spago_packages Verzeichnis
- Modulname muss Dateipfad entsprechen
- Nutzt Spago/Bower für Dependency-Resolution

**Weiterführende Links:**
- [PureScript Documentation - Modules](https://book.purescript.org/chapter3.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Sucht in sys.path, dann in Standard-Library
import math.utils  # Sucht in sys.path
```

**Besonderheiten:**
- Sucht in sys.path
- Nutzt pip für Dependency-Resolution
- Unterstützt virtual environments

**Weiterführende Links:**
- [Python Documentation - Modules](https://docs.python.org/3/tutorial/modules.html)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
#lang racket

;; Sucht in collections, dann in Standard-Library
(require "math-utils.rkt")  ; Lokale Datei
(require math/utils)  ; Sucht in collections
```

**Besonderheiten:**
- Sucht in collections Verzeichnis
- Nutzt Racket Package Manager für Dependency-Resolution
- Unterstützt hierarchische Collection-Resolution

**Weiterführende Links:**
- [Racket Documentation - Modules](https://docs.racket-lang.org/guide/modules.html)

</TabItem>
<TabItem value="roc" label="Roc">

```roc
# Module werden durch Dateinamen aufgelöst
# imports [ModuleName] sucht ModuleName.roc
```

**Besonderheiten:**
- Modulname muss Dateinamen entsprechen
- Sucht in lokalen Dateien und Package-Pfaden
- Unterstützt qualifizierte Imports

**Weiterführende Links:**
- [Roc Documentation - Modules](https://www.roc-lang.org/tutorial)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Sucht in $LOAD_PATH, dann in Standard-Library
require 'math_utils'  # Sucht in $LOAD_PATH
```

**Besonderheiten:**
- Sucht in $LOAD_PATH
- Nutzt Bundler für Dependency-Resolution
- Unterstützt Gem-Resolution

**Weiterführende Links:**
- [Ruby Documentation - Modules](https://docs.ruby-lang.org/en/3.2/syntax/modules_and_classes_rdoc.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Sucht in Cargo-Dependencies, dann in Standard-Library
use math_utils::add;  // Sucht in Cargo-Dependencies
```

**Besonderheiten:**
- Sucht in Cargo-Dependencies
- Nutzt Cargo für Dependency-Resolution
- Unterstützt Crate-Resolution

**Weiterführende Links:**
- [Rust Documentation - Modules](https://doc.rust-lang.org/book/ch07-02-defining-modules-to-control-scope-and-privacy.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Sucht in classpath, dann in Standard-Library
import math.utils.Calculator  // Sucht in classpath
```

**Besonderheiten:**
- Sucht in classpath
- Nutzt sbt/Maven für Dependency-Resolution
- Unterstützt JAR-Datei-Resolution

**Weiterführende Links:**
- [Scala Documentation - Packages](https://docs.scala-lang.org/tour/packages.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Sucht in implementierungsspezifischem Library-Pfad
(import (math utils))  ; Sucht in Library-Pfad
```

**Besonderheiten:**
- R7RS: `import` sucht in implementierungsspezifischem Library-Pfad
- Hierarchische Library-Namen werden auf Dateisystem-Pfade abgebildet
- Auflösung ist implementierungsabhängig

**Weiterführende Links:**
- [R7RS Scheme - Libraries](https://small.r7rs.org/attachment/r7rs.pdf)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Sucht in Swift Package Dependencies, dann in Standard-Library
import MathUtils  // Sucht in Swift Package Dependencies
```

**Besonderheiten:**
- Sucht in Swift Package Dependencies
- Nutzt Swift Package Manager für Dependency-Resolution
- Unterstützt Module-Resolution

**Weiterführende Links:**
- [Swift Documentation - Modules](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/accesscontrol/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Sucht in node_modules, dann in Standard-Library
import { add } from 'math-utils';  // Sucht in node_modules
```

**Besonderheiten:**
- Sucht in node_modules
- Nutzt npm/yarn für Dependency-Resolution
- Unterstützt TypeScript-spezifische Resolution

**Weiterführende Links:**
- [TypeScript Documentation - Module Resolution](https://www.typescriptlang.org/docs/handbook/module-resolution.html)

</TabItem>
<TabItem value="vbnet" label="VB.NET">

```vb
' Sucht in Assembly-Referenzen, dann in NuGet-Packages
Imports Math.Utils  ' Sucht in Assembly-Referenzen
```

**Besonderheiten:**
- Sucht in Assembly-Referenzen
- Nutzt NuGet für Dependency-Resolution
- Unterstützt .NET Assembly-Resolution

**Weiterführende Links:**
- [Microsoft VB.NET Documentation - Namespaces](https://learn.microsoft.com/en-us/dotnet/visual-basic/programming-guide/program-structure/namespaces)

</TabItem>
<TabItem value="v" label="V">

```v
// Sucht in aktueller Datei, dann in Modul-Pfaden
import math.utils  // Sucht in Modul-Pfaden
```

**Besonderheiten:**
- Sucht in Modul-Pfaden
- Modulname entspricht Verzeichnisnamen
- Unterstützt hierarchische Modul-Resolution

**Weiterführende Links:**
- [V Documentation - Modules](https://github.com/vlang/v/blob/master/doc/docs.md#modules)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
(* Sucht in $Path, dann in Standard-Library *)
Needs["Math`Utils`"]  (* Sucht in $Path *)
```

**Besonderheiten:**
- Sucht in $Path
- Nutzt Paclet Manager für Dependency-Resolution
- Unterstützt Package-Resolution

**Weiterführende Links:**
- [Wolfram Language Documentation - Packages](https://reference.wolfram.com/language/guide/Packages.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Sucht in aktueller Datei, dann in build.zig Dependencies
const math_utils = @import("math_utils.zig");  // Lokale Datei
```

**Besonderheiten:**
- Sucht in aktueller Datei, dann in build.zig Dependencies
- Unterstützt relative und absolute Pfade
- Nutzt Build-System für Dependency-Resolution

**Weiterführende Links:**
- [Zig Documentation - Source Files](https://ziglang.org/documentation/0.11.0/#Source-Encoding)

</TabItem>
</Tabs>

