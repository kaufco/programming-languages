---
slug: /metaprogrammierung/code-generation
title: 16.3. Code Generation
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 16.3. Code Generation

Code-Generierung und AST-Manipulation.

## 16.3.1. Source Code Generation

Ermöglicht es, Quellcode programmatisch zu generieren, um repetitive Code-Muster zu automatisieren oder Code basierend auf Metadaten oder Konfigurationen zu erstellen.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'd', 'dart', 'go', 'java', 'javascript', 'kotlin', 'prolog', 'python', 'ruby', 'rust', 'scala']}>
<TabItem value="java" label="Java">

```java
// Benötigt: import javax.annotation.processing.*, import javax.lang.model.element.*;

@SupportedAnnotationTypes("GenerateGetter")
@SupportedSourceVersion(SourceVersion.RELEASE_17)
public class GetterGenerator extends AbstractProcessor {
    @Override
    public boolean process(Set<? extends TypeElement> annotations, 
                          RoundEnvironment roundEnv) {
        for (Element element : roundEnv.getElementsAnnotatedWith(GenerateGetter.class)) {
            try {
                JavaFileObject file = processingEnv.getFiler()
                    .createSourceFile(element.getSimpleName() + "Generated");
                try (var writer = file.openWriter()) {
                    writer.write("public class " + element.getSimpleName() + 
                                "Generated { /* Generated code */ }");
                }
            } catch (IOException e) {
                // Handle error
            }
        }
        return true;
    }
}
```

**Besonderheiten:**
- Source Code Generation über Annotation Processing
- `Filer.createSourceFile()` für Code-Generierung
- Läuft zur Compile-Zeit
- Kann vollständige Klassen generieren

**Weiterführende Links:**
- [Oracle Java Documentation - Annotation Processing](https://docs.oracle.com/javase/8/docs/api/javax/annotation/processing/package-summary.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Benötigt: using Microsoft.CodeAnalysis, using Microsoft.CodeAnalysis.CSharp

[Generator]
public class GetterGenerator : ISourceGenerator {
    public void Initialize(GeneratorInitializationContext context) {
        // Initialisierung
    }
    
    public void Execute(GeneratorExecutionContext context) {
        var source = @"
namespace Generated {
    public class GeneratedClass {
        public void GeneratedMethod() {
            System.Console.WriteLine(""Generated code"");
        }
    }
}";
        context.AddSource("GeneratedClass.g.cs", SourceText.From(source, Encoding.UTF8));
    }
}
```

**Besonderheiten:**
- Source Code Generation über Source Generators
- `AddSource()` für Code-Generierung
- Läuft zur Compile-Zeit
- Kann vollständige Klassen generieren

**Weiterführende Links:**
- [Microsoft C# Documentation - Source Generators](https://learn.microsoft.com/en-us/dotnet/csharp/roslyn-sdk/source-generators-overview)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Benötigt: import com.google.devtools.ksp.processing.*, import com.google.devtools.ksp.symbol.*

class GetterGenerator : SymbolProcessor {
    override fun process(resolver: Resolver): List<KSAnnotated> {
        val symbols = resolver.getSymbolsWithAnnotation("GenerateGetter")
        symbols.forEach { symbol ->
            if (symbol is KSClassDeclaration) {
                val file = codeGenerator.createNewFile(
                    Dependencies(false),
                    symbol.packageName.asString(),
                    symbol.simpleName.asString() + "Generated"
                )
                file.write("class ${symbol.simpleName}Generated { /* Generated code */ }".toByteArray())
                file.close()
            }
        }
        return emptyList()
    }
}
```

**Besonderheiten:**
- Source Code Generation über KSP
- `createNewFile()` für Code-Generierung
- Läuft zur Compile-Zeit
- Kann vollständige Klassen generieren

**Weiterführende Links:**
- [Kotlin Documentation - KSP](https://kotlinlang.org/docs/ksp-overview.html)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Benötigt: import 'package:json_annotation/json_annotation.dart';

part 'book.g.dart';

@JsonSerializable()
class Book {
  final String title;
  final String author;
  
  Book(this.title, this.author);
  
  factory Book.fromJson(Map<String, dynamic> json) => _$BookFromJson(json);
  Map<String, dynamic> toJson() => _$BookToJson(this);
}
```

**Besonderheiten:**
- Source Code Generation über `build_runner`
- Code-Generierung zur Compile-Zeit
- Generierte Dateien in `.g.dart` Dateien
- Häufig für Serialisierung verwendet

**Weiterführende Links:**
- [Dart Documentation - Code Generation](https://dart.dev/guides/libraries/create-library-packages#code-generation)

</TabItem>
<TabItem value="go" label="Go">

```go
//go:generate stringer -type=Status

type Status int

const (
    Pending Status = iota
    Approved
    Rejected
)

// Code wird durch 'go generate' generiert
// Generiert String() Methode basierend auf Kommentar
```

**Besonderheiten:**
- Source Code Generation über `go generate`
- Kommentar-basierte Direktiven
- Externe Tools für Code-Generierung
- Läuft vor der Compilierung

**Weiterführende Links:**
- [Go Documentation - Generate](https://pkg.go.dev/cmd/go#hdr-Generate_Go_files_by_processing_source)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Benötigt: use proc_macro::TokenStream, use quote::quote

#[proc_macro]
pub fn generate_struct(input: TokenStream) -> TokenStream {
    let name = "GeneratedStruct";
    let expanded = quote! {
        struct #name {
            field: i32,
        }
        
        impl #name {
            fn new() -> Self {
                #name { field: 42 }
            }
        }
    };
    TokenStream::from(expanded)
}
```

**Besonderheiten:**
- Source Code Generation über Procedural Macros
- `quote!` für Code-Generierung
- Läuft zur Compile-Zeit
- Kann vollständige Strukturen generieren

**Weiterführende Links:**
- [Rust Documentation - Procedural Macros](https://doc.rust-lang.org/reference/procedural-macros.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
import scala.reflect.macros.blackbox.Context

def generateClass(name: String): Any = macro generateClassImpl

def generateClassImpl(c: Context)(name: c.Expr[String]): c.Expr[Any] = {
  import c.universe._
  val className = name.tree match {
    case Literal(Constant(s: String)) => s
    case _ => "DefaultClass"
  }
  c.Expr(q"class $className { def method = 42 }")
}
```

**Besonderheiten:**
- Source Code Generation über Macros
- AST-Manipulation über `c.universe`
- Läuft zur Compile-Zeit
- Kann vollständige Klassen generieren

**Weiterführende Links:**
- [Scala Documentation - Macros](https://docs.scala-lang.org/overviews/macros/overview.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Source Code Generation zur Laufzeit über assert/retract
generate_class(ClassName, Methods) :-
    forall(
        member(Name, Methods),
        (   Head =.. [Name, ClassName],
            assertz(Head)
        )
    ).

% Verwendung
:- generate_class(my_class, [method1, method2]).

% Generierte Prädikate abfragen
?- method1(my_class).  % true
?- method2(my_class).  % true

% Code aus Atom generieren und laden
:- term_to_atom(Rule, 'greet(Name) :- format("Hello, ~w~n", [Name])'),
   assertz(Rule).

?- greet(alice).  % Hello, alice
```

**Besonderheiten:**
- Source Code Generation zur Laufzeit über `assert/1`, `assertz/1`
- `=..` (univ) für dynamische Term-Konstruktion
- `term_to_atom/2` für Code-Generierung aus Strings
- Prolog ist homoikonisch — Code und Daten haben dieselbe Struktur

**Weiterführende Links:**
- [SWI-Prolog Documentation - assertz](https://www.swi-prolog.org/pldoc/man?predicate=assertz/1)

</TabItem>
<TabItem value="python" label="Python">

```python
# Source Code Generation zur Laufzeit
def generate_class(class_name, methods):
    methods_code = '\n    '.join([f'def {m}(): pass' for m in methods])
    code = f'''
class {class_name}:
    {methods_code}
'''
    exec(code, globals())
    return globals()[class_name]

# Verwendung
MyClass = generate_class('MyClass', ['method1', 'method2'])
obj = MyClass()
```

**Besonderheiten:**
- Source Code Generation zur Laufzeit über `exec()`
- Sehr flexibel, aber weniger sicher
- Kann Klassen dynamisch generieren
- Weniger strukturiert als Compile-Time-Generierung

**Weiterführende Links:**
- [Python Documentation - exec](https://docs.python.org/3/library/functions.html#exec)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Source Code Generation zur Laufzeit
def generate_class(class_name, methods)
  methods_code = methods.map { |m| "def #{m}; end" }.join("\n  ")
  code = <<-RUBY
    class #{class_name}
      #{methods_code}
    end
  RUBY
  eval(code)
  Object.const_get(class_name)
end

# Verwendung
MyClass = generate_class('MyClass', [:method1, :method2])
obj = MyClass.new
```

**Besonderheiten:**
- Source Code Generation zur Laufzeit über `eval()`
- Sehr flexibel, aber weniger sicher
- Kann Klassen dynamisch generieren
- Weniger strukturiert als Compile-Time-Generierung

**Weiterführende Links:**
- [Ruby Documentation - eval](https://ruby-doc.org/core-3.1.0/Kernel.html#method-i-eval)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Source Code Generation zur Laufzeit
function generateClass(className, methods) {
    const methodsCode = methods.map(m => `    ${m}() { }`).join('\n');
    const code = `
        class ${className} {
${methodsCode}
        }
    `;
    return eval(`(${code})`);
}

// Verwendung
const MyClass = generateClass('MyClass', ['method1', 'method2']);
const obj = new MyClass();
```

**Besonderheiten:**
- Source Code Generation zur Laufzeit über `eval()`
- Sehr flexibel, aber weniger sicher
- Kann Klassen dynamisch generieren
- Weniger strukturiert als Compile-Time-Generierung

**Weiterführende Links:**
- [MDN Web Docs - eval](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval)

</TabItem>
<TabItem value="d" label="D">

```d
// Source Code Generation (String Mixins)
// Benötigt: import std.stdio;

// String Mixin: Code als String zur Compile-Zeit einfügen
mixin("int x = 42;");
writeln(x);  // 42

// Generische Getter/Setter generieren
string generateProperty(string type, string name) {
    return "private " ~ type ~ " _" ~ name ~ ";" ~
           "@property " ~ type ~ " " ~ name ~ "() { return _" ~ name ~ "; }" ~
           "@property void " ~ name ~ "(" ~ type ~ " val) { _" ~ name ~ " = val; }";
}

class Config {
    mixin(generateProperty("string", "host"));
    mixin(generateProperty("int", "port"));
}

auto cfg = new Config();
cfg.host = "localhost";
cfg.port = 8080;
```

**Besonderheiten:**
- `mixin("code")` fügt Code als String zur Compile-Zeit ein
- String Mixins ermöglichen beliebige Code-Generierung
- CTFE (Compile-Time Function Evaluation) für dynamische Code-Erzeugung
- Mächtiger als Makros, da beliebiger D-Code generiert werden kann

**Weiterführende Links:**
- [D Language Specification - String Mixins](https://dlang.org/spec/expression.html#mixin_expressions)

</TabItem>

</Tabs>


## 16.3.2. AST Manipulation

Ermöglicht es, den Abstract Syntax Tree (AST) eines Programms zur Laufzeit oder Compile-Zeit zu untersuchen, zu transformieren oder zu generieren.

### Sprachen {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'groovy', 'javascript', 'julia', 'lean4', 'prolog', 'python', 'racket', 'rust', 'scala', 'typescript', 'wolfram-language']}>
<TabItem value="prolog" label="Prolog">

```prolog
% AST-Manipulation — Terme sind der AST (Homoiconicity)
Expr = (1 + 2 * 3),

% Term-Zerlegung mit =.. (univ)
Expr =.. [Op | Args],
% Op = +, Args = [1, 2*3]

% Term-Informationen
functor(person(alice, 30), Name, Arity),
% Name = person, Arity = 2

arg(1, person(alice, 30), First),
% First = alice

% AST-Transformation: + durch * ersetzen
transform(X + Y, Result) :- !,
    transform(X, TX),
    transform(Y, TY),
    Result = TX * TY.
transform(Term, Transformed) :-
    compound(Term), !,
    Term =.. [F | Args],
    maplist(transform, Args, NewArgs),
    Transformed =.. [F | NewArgs].
transform(X, X).

?- transform(1 + 2, Result).
% Result = 1 * 2
```

**Besonderheiten:**
- Prolog ist homoikonisch — Code und Daten sind Terme
- `=..` (univ) zerlegt Terme in Funktor und Argumente
- `functor/3` und `arg/3` für Term-Inspektion
- `maplist/3` für rekursive AST-Traversierung

**Weiterführende Links:**
- [SWI-Prolog Documentation - Examining Terms](https://www.swi-prolog.org/pldoc/man?section=manipterm)

</TabItem>
<TabItem value="python" label="Python">

```python
# Benötigt: import ast

# AST-Erstellung
tree = ast.parse("""
def add(a, b):
    return a + b
""")

# AST-Untersuchung
for node in ast.walk(tree):
    if isinstance(node, ast.FunctionDef):
        print(f"Function: {node.name}")

# AST-Transformation
class AddOne(ast.NodeTransformer):
    def visit_BinOp(self, node):
        if isinstance(node.op, ast.Add):
            return ast.BinOp(left=node.left, op=ast.Mult(), right=node.right)
        return node

transformer = AddOne()
new_tree = transformer.visit(tree)
```

**Besonderheiten:**
- AST-Manipulation über `ast` Modul
- `ast.parse()` für AST-Erstellung
- `ast.NodeTransformer` für AST-Transformation
- `ast.walk()` für AST-Traversierung

**Weiterführende Links:**
- [Python Documentation - ast](https://docs.python.org/3/library/ast.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Benötigt: import * as babel from '@babel/core', import * as parser from '@babel/parser', import traverse from '@babel/traverse', import generate from '@babel/generator'

// AST-Erstellung
const code = 'function add(a, b) { return a + b; }';
const ast = parser.parse(code);

// AST-Untersuchung
traverse(ast, {
    FunctionDeclaration(path) {
        console.log('Function:', path.node.id.name);
    }
});

// AST-Transformation
traverse(ast, {
    BinaryExpression(path) {
        if (path.node.operator === '+') {
            path.node.operator = '*';
        }
    }
});

// Code-Generierung
const output = generate(ast);
```

**Besonderheiten:**
- AST-Manipulation über Babel
- `@babel/parser` für AST-Erstellung
- `@babel/traverse` für AST-Traversierung
- `@babel/generator` für Code-Generierung

**Weiterführende Links:**
- [Babel Documentation](https://babeljs.io/docs/en/)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Benötigt: import * as ts from 'typescript'

// AST-Erstellung
const sourceCode = 'function add(a: number, b: number): number { return a + b; }';
const sourceFile = ts.createSourceFile(
    'test.ts',
    sourceCode,
    ts.ScriptTarget.Latest,
    true
);

// AST-Untersuchung
function visit(node: ts.Node) {
    if (ts.isFunctionDeclaration(node)) {
        console.log('Function:', node.name?.text);
    }
    ts.forEachChild(node, visit);
}

visit(sourceFile);

// AST-Transformation
const transformer: ts.TransformerFactory<ts.SourceFile> = (context) => {
    return (sourceFile) => {
        const visitor = (node: ts.Node): ts.Node => {
            if (ts.isBinaryExpression(node) && node.operatorToken.kind === ts.SyntaxKind.PlusToken) {
                return ts.factory.createBinaryExpression(
                    node.left,
                    ts.SyntaxKind.AsteriskToken,
                    node.right
                );
            }
            return ts.visitEachChild(node, visitor, context);
        };
        return ts.visitNode(sourceFile, visitor) as ts.SourceFile;
    };
};
```

**Besonderheiten:**
- AST-Manipulation über TypeScript Compiler API
- `ts.createSourceFile()` für AST-Erstellung
- `ts.visitNode()` für AST-Traversierung
- `ts.factory` für AST-Generierung

**Weiterführende Links:**
- [TypeScript Documentation - Compiler API](https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Benötigt: use syn::{parse_macro_input, DeriveInput, Data}, use quote::quote, use proc_macro::TokenStream

#[proc_macro_derive(MyDerive)]
pub fn my_derive(input: TokenStream) -> TokenStream {
    let input = parse_macro_input!(input as DeriveInput);
    
    // AST-Untersuchung
    let name = &input.ident;
    let data = &input.data;
    
    // AST-Transformation
    let expanded = match data {
        Data::Struct(_) => {
            quote! {
                impl #name {
                    fn new() -> Self {
                        // Generated code
                    }
                }
            }
        },
        _ => quote! {},
    };
    
    TokenStream::from(expanded)
}
```

**Besonderheiten:**
- AST-Manipulation über `syn` und `quote`
- `syn` für AST-Parsing
- `quote!` für Code-Generierung
- Procedural Macros für AST-Transformation

**Weiterführende Links:**
- [Rust Documentation - Procedural Macros](https://doc.rust-lang.org/reference/procedural-macros.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Benötigt: import scala.reflect.macros.blackbox.Context, import scala.reflect.runtime.universe._

def transformAST(c: Context)(tree: c.Tree): c.Tree = {
  import c.universe._
  
  // AST-Untersuchung
  val transformed = new Transformer {
    override def transform(tree: Tree): Tree = {
      tree match {
        case Apply(Select(lhs, TermName("+")), List(rhs)) =>
          Apply(Select(lhs, TermName("*")), List(rhs))
        case _ =>
          super.transform(tree)
      }
    }
  }
  
  transformed.transform(tree)
}
```

**Besonderheiten:**
- AST-Manipulation über `c.universe`
- `Transformer` für AST-Transformation
- Pattern Matching für AST-Knoten
- Sehr mächtiges AST-System

**Weiterführende Links:**
- [Scala Documentation - Macros](https://docs.scala-lang.org/overviews/macros/overview.html)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; AST-Manipulation über Makros
(defmacro transform-code [form]
  (let [transformed (walk/postwalk
                      (fn [node]
                        (if (and (list? node) (= (first node) '+))
                          (list '* (second node) (nth node 2))
                          node))
                      form)]
    transformed))

;; Verwendung
(transform-code (+ 5 3))  ; (* 5 3)
```

**Besonderheiten:**
- AST-Manipulation über Makros
- `walk/postwalk` für AST-Traversierung
- Code ist Daten (Homoiconicity)
- Sehr mächtiges AST-System

**Weiterführende Links:**
- [Clojure Documentation - Macros](https://clojure.org/reference/macros)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; AST-Manipulation über Makros
(defmacro transform-code (form)
  (labels ((transform (node)
             (cond
               ((and (listp node) (eq (car node) '+))
                (list '* (cadr node) (caddr node)))
               ((listp node)
                (mapcar #'transform node))
               (t node))))
    (transform form)))

;; Verwendung
(transform-code (+ 5 3))  ; (* 5 3)
```

**Besonderheiten:**
- AST-Manipulation über Makros
- Code ist Daten (Homoiconicity)
- Rekursive Transformation möglich
- Sehr mächtiges AST-System

**Weiterführende Links:**
- [Common Lisp HyperSpec - Macros](http://www.lispworks.com/documentation/HyperSpec/Body/03_ababa.htm)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; AST-Manipulation über Syntax Objects
(define-syntax (transform-code stx)
  (syntax-case stx ()
    [(_ form)
     (let ([transformed (syntax->datum #'form)])
       (datum->syntax stx
         (walk (lambda (node)
                 (if (and (list? node) (eq? (car node) '+))
                     (list '* (cadr node) (caddr node))
                     node))
               transformed)))]))

;; Verwendung
(transform-code (+ 5 3))  ; (* 5 3)
```

**Besonderheiten:**
- AST-Manipulation über Syntax Objects
- `syntax->datum` und `datum->syntax` für Konvertierung
- Hygienic Macros
- Sehr mächtiges AST-System

**Weiterführende Links:**
- [Racket Documentation - Macros](https://docs.racket-lang.org/guide/macros.html)

</TabItem>
<TabItem value="groovy" label="Groovy">

```groovy
import groovy.transform.*

// Eingebaute AST-Transformationen
@Immutable
class Point {
    int x, y
}

@Singleton
class Registry {
    List<String> items = []
}

@Sortable
class Student {
    String name
    int grade
}

// Verwendung
def p = new Point(1, 2)
Registry.instance.items << "test"
```

**Besonderheiten:**
- Umfangreiche eingebaute AST-Transformationen (`@Immutable`, `@Singleton`, `@Sortable`, `@Builder`, etc.)
- Eigene AST-Transformationen über `ASTTransformation` Interface möglich
- Manipulation des Abstract Syntax Tree zur Compile-Time
- Lokale (`@AnnotationName`) und globale Transformationen

**Weiterführende Links:**
- [Groovy Documentation - AST Transformations](https://groovy-lang.org/metaprogramming.html#_compile_time_metaprogramming)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# AST als Expr-Objekte
expr = :(1 + 2 * 3)
println(typeof(expr))  # Expr
println(expr.head)     # :call
println(expr.args)     # [:+, 1, :(2 * 3)]

# AST manipulieren
expr.args[2] = 10
eval(expr)  # 10 + 2 * 3 = 16

# AST programmatisch erstellen
new_expr = Expr(:call, :+, 1, 2, 3)
eval(new_expr)  # 6

# Quoting und Interpolation
x = 42
expr = :($x + 1)
eval(expr)  # 43
```

**Besonderheiten:**
- `:(...)` zum Quoting von Ausdrücken als Expr-Objekte
- `Expr`-Objekte haben `head` und `args` Felder
- `eval()` zum Auswerten von Expr-Objekten
- `$` für Interpolation in Quoted Expressions
- Basis für Julias Makro-System

**Weiterführende Links:**
- [Julia Documentation - Metaprogramming](https://docs.julialang.org/en/v1/manual/metaprogramming/)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- Lean 4 Metaprogrammierung: Syntax-Objekte manipulieren
import Lean

open Lean Elab Meta

-- Syntax-Quotation: `( ... ) erzeugt Syntax-Objekte
def mkAddExpr (a b : Syntax) : MacroM Syntax :=
  `($a + $b)

-- Elaboration: Syntax → Expr (Core-AST)
elab "myAdd " a:term " and " b:term : term => do
  let aExpr ← elabTerm a none
  let bExpr ← elabTerm b none
  mkAppM ``HAdd.hAdd #[aExpr, bExpr]

#eval myAdd 3 and 4  -- 7
```

**Besonderheiten:**
- Lean 4 bietet volle AST-Manipulation über `Syntax`- und `Expr`-Typen.
- Syntax-Quotation mit `` `( ... ) `` erzeugt und dekonstruiert AST-Knoten.
- `elab`-Kommandos ermöglichen benutzerdefinierte Elaboration von Syntax zu Core-Ausdrücken.
- Das Metaprogrammierungs-Framework ist in Lean 4 selbst geschrieben.

**Weiterführende Links:**
- [Lean 4 Documentation - Metaprogramming](https://lean-lang.org/lean4/doc/metaprogramming.html)
- [Lean 4 Metaprogramming Book](https://leanprover-community.github.io/lean4-metaprogramming-book/)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* AST Manipulation - Ausdrücke sind Daten *)
expr = Hold[1 + 2 * 3];
TreeForm[expr]  (* Zeigt den Ausdrucksbaum *)

(* Manipulation *)
transformed = expr /. Times -> Plus
(* Hold[1 + 2 + 3] *)
```

**Besonderheiten:**
- Wolfram Language ist homoikonisch: Code und Daten haben dieselbe Struktur
- `Hold[]` verhindert Auswertung für AST-Manipulation
- `TreeForm[]` visualisiert den Ausdrucksbaum
- Transformationsregeln (`/.`) für AST-Manipulation

**Weiterführende Links:**
- [Wolfram Language Documentation - Expression Manipulation](https://reference.wolfram.com/language/guide/ExpressionManipulation.html)

</TabItem>
</Tabs>


## 16.3.3. Language-Oriented Programming

Ermöglicht es, domänenspezifische Sprachen (DSLs) zu erstellen und zu verwenden, die speziell für bestimmte Problembereiche entwickelt wurden, um Code lesbarer und ausdrucksstärker zu machen.

### Sprachen {#sprachen}

<Tabs availableTabs={['ruby', 'python', 'prolog', 'scala', 'clojure', 'common-lisp', 'racket', 'rust', 'haskell', 'lean4', 'fsharp', 'kotlin']} yellowTabs={['mercury']}>
<TabItem value="ruby" label="Ruby">

```ruby
# DSL für Konfiguration
class ConfigDSL
  def self.configure(&block)
    config = new
    config.instance_eval(&block)
    config
  end
  
  def database(name)
    @database = name
  end
  
  def port(num)
    @port = num
  end
end

# Verwendung der DSL
config = ConfigDSL.configure do
  database "postgresql"
  port 5432
end
```

**Besonderheiten:**
- DSL-Erstellung über Metaprogrammierung
- `instance_eval` für DSL-Kontext
- Sehr flexibel und ausdrucksstark
- Häufig für Konfiguration und Testing verwendet

**Weiterführende Links:**
- [Ruby Documentation - Metaprogramming](https://ruby-doc.org/core-3.1.0/doc/syntax/methods_rdoc.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% DSL über Definite Clause Grammars (DCGs)
config_entry(database(DB)) --> [database], [DB].
config_entry(port(Port))   --> [port], [Port].

config([E|Es]) --> config_entry(E), config(Es).
config([])     --> [].

% Verwendung der DSL
?- phrase(config(Config), [database, postgresql, port, 5432]).
% Config = [database(postgresql), port(5432)]

% DSL über benutzerdefinierte Operatoren
:- op(700, xfx, =>).
:- dynamic setting/2.

Key => Value :- assertz(setting(Key, Value)).

:- database => postgresql.
:- port => 5432.

?- setting(database, DB).  % DB = postgresql
?- setting(port, P).       % P = 5432
```

**Besonderheiten:**
- DSL-Erstellung über Definite Clause Grammars (DCGs)
- Benutzerdefinierte Operatoren über `op/3`
- `term_expansion/2` für syntaktische Transformation
- Deklarative Natur macht Prolog ideal für DSL-Erstellung

**Weiterführende Links:**
- [SWI-Prolog Documentation - DCGs](https://www.swi-prolog.org/pldoc/man?section=DCG)

</TabItem>
<TabItem value="python" label="Python">

```python
# DSL für Konfiguration
class ConfigDSL:
    def __init__(self):
        self._config = {}
    
    def database(self, name):
        self._config['database'] = name
        return self
    
    def port(self, num):
        self._config['port'] = num
        return self

# Verwendung der DSL
config = ConfigDSL()
config.database("postgresql").port(5432)
```

**Besonderheiten:**
- DSL-Erstellung über Method Chaining
- Weniger flexibel als Ruby
- Häufig für Konfiguration verwendet
- Flask, Django verwenden DSL-Patterns

**Weiterführende Links:**
- [Python Documentation - Classes](https://docs.python.org/3/tutorial/classes.html)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// DSL für Build-Konfiguration
class BuildDSL {
  def project(name: String)(block: => Unit): Unit = {
    println(s"Project: $name")
    block
  }
  
  def dependencies(deps: String*): Unit = {
    println(s"Dependencies: ${deps.mkString(", ")}")
  }
}

// Verwendung der DSL
val build = new BuildDSL
build.project("my-project") {
  build.dependencies("scala-library", "junit")
}
```

**Besonderheiten:**
- DSL-Erstellung über Methoden mit Block-Parametern
- Sehr ausdrucksstark
- Häufig für Build-Tools verwendet (SBT)
- Unterstützt komplexe DSL-Strukturen

**Weiterführende Links:**
- [Scala Documentation - DSLs](https://docs.scala-lang.org/overviews/core/implicit-classes.html)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
;; DSL für Datenbank-Abfragen
(defmacro select [table & conditions]
  `(query ~table ~@conditions))

(defmacro where [condition]
  `(filter ~condition))

;; Verwendung der DSL
(select :users
  (where (> :age 18))
  (where (= :status "active")))
```

**Besonderheiten:**
- DSL-Erstellung über Makros
- Code ist Daten (Homoiconicity)
- Sehr mächtig und flexibel
- Häufig für Datenbank-Abfragen verwendet

**Weiterführende Links:**
- [Clojure Documentation - Macros](https://clojure.org/reference/macros)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; DSL für HTML-Generierung
(defmacro html (&body body)
  `(progn ,@body))

(defmacro tag (name &body body)
  `(format t "<~a>~{~a~}</~a>~%" ,name (list ,@body)))

;; Verwendung der DSL
(html
  (tag :div
    (tag :h1 "Hello")
    (tag :p "World")))
```

**Besonderheiten:**
- DSL-Erstellung über Makros
- Code ist Daten (Homoiconicity)
- Sehr mächtig und flexibel
- Häufig für HTML-Generierung verwendet

**Weiterführende Links:**
- [Common Lisp HyperSpec - Macros](http://www.lispworks.com/documentation/HyperSpec/Body/03_ababa.htm)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; DSL für Web-Entwicklung
(define-syntax html
  (syntax-rules ()
    [(_ body ...)
     (list body ...)]))

(define-syntax tag
  (syntax-rules ()
    [(_ name body ...)
     (list 'name body ...)]))

;; Verwendung der DSL
(html
  (tag div
    (tag h1 "Hello")
    (tag p "World")))
```

**Besonderheiten:**
- DSL-Erstellung über Hygienic Macros
- Sehr mächtig und flexibel
- Häufig für Web-Entwicklung verwendet
- Unterstützt komplexe DSL-Strukturen

**Weiterführende Links:**
- [Racket Documentation - Macros](https://docs.racket-lang.org/guide/macros.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// DSL für SQL-Abfragen
macro_rules! sql {
    (SELECT $($field:ident),* FROM $table:ident WHERE $condition:expr) => {
        // SQL-Abfrage-Generierung
        format!("SELECT {} FROM {} WHERE {}", 
            stringify!($($field),*), 
            stringify!($table), 
            stringify!($condition))
    };
}

// Verwendung der DSL
let query = sql!(SELECT id, name FROM users WHERE age > 18);
```

**Besonderheiten:**
- DSL-Erstellung über Declarative Macros
- Pattern Matching für DSL-Syntax
- Weniger flexibel als Lisp-Makros
- Häufig für SQL-Abfragen verwendet

**Weiterführende Links:**
- [Rust Documentation - Macros](https://doc.rust-lang.org/book/ch19-06-macros.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Benötigt: import Text.Parsec

-- Parser-DSL
numberParser :: Parsec String () Int
numberParser = do
    digits <- many1 digit
    return (read digits)

-- Verwendung der DSL
parse numberParser "" "123"  -- Right 123
```

**Besonderheiten:**
- DSL-Erstellung über Monaden
- Sehr ausdrucksstark
- Häufig für Parsing verwendet
- Unterstützt komplexe DSL-Strukturen

**Weiterführende Links:**
- [Haskell Documentation - Parsec](https://hackage.haskell.org/package/parsec)

</TabItem>
<TabItem value="lean4" label="Lean 4">

```lean4
-- DSL über benutzerdefinierte Syntax (Notation + Macro)
import Lean

-- Benutzerdefinierte Notation für einen HTML-DSL
declare_syntax_cat html
syntax str : html
syntax "<div>" html* "</div>" : html
syntax "<p>" html* "</p>" : html

-- Macro, das HTML-DSL in String übersetzt
macro_rules
  | `(html| $s:str) => `($s)
  | `(html| <div> $children:html* </div>) =>
    let strs := children.map fun c => `(html| $c)
    `("<div>" ++ String.join ([$[$strs],*]) ++ "</div>")

-- Benutzerdefinierte Notation für Mathematik
notation:65 a " ≤ " b " ≤ " c => a ≤ b ∧ b ≤ c
```

**Besonderheiten:**
- Lean 4 unterstützt Language-Oriented Programming durch benutzerdefinierte Syntax-Kategorien und Makros.
- `declare_syntax_cat` erstellt neue Syntax-Kategorien.
- `syntax` definiert Parsing-Regeln, `macro_rules` definiert die Transformation.
- `notation` und `infix` ermöglichen domänenspezifische Operatoren.

**Weiterführende Links:**
- [Lean 4 Documentation - Metaprogramming](https://lean-lang.org/lean4/doc/metaprogramming.html)
- [Lean 4 Metaprogramming Book](https://leanprover-community.github.io/lean4-metaprogramming-book/)

</TabItem>
<TabItem value="fsharp" label="F#">

```fsharp
// DSL für HTML-Generierung
type Html = 
    | Tag of string * Html list
    | Text of string

let div content = Tag("div", content)
let h1 text = Tag("h1", [Text text])
let p text = Tag("p", [Text text])

// Verwendung der DSL
let html = div [
    h1 "Hello"
    p "World"
]
```

**Besonderheiten:**
- DSL-Erstellung über Discriminated Unions
- Sehr ausdrucksstark
- Häufig für HTML-Generierung verwendet
- Unterstützt komplexe DSL-Strukturen

**Weiterführende Links:**
- [F# Documentation - Discriminated Unions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/discriminated-unions)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// DSL für HTML-Generierung
class Html {
    fun div(block: Html.() -> Unit) {
        println("<div>")
        block()
        println("</div>")
    }
    
    fun h1(text: String) {
        println("<h1>$text</h1>")
    }
    
    fun p(text: String) {
        println("<p>$text</p>")
    }
}

// Verwendung der DSL
html {
    div {
        h1("Hello")
        p("World")
    }
}
```

**Besonderheiten:**
- DSL-Erstellung über Lambda mit Receiver
- Sehr ausdrucksstark
- Häufig für HTML-Generierung verwendet
- Unterstützt komplexe DSL-Strukturen

**Weiterführende Links:**
- [Kotlin Documentation - DSLs](https://kotlinlang.org/docs/type-safe-builders.html)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% DSL über Definite Clause Grammars (DCGs)
:- type config_item
    --->    database(string)
    ;       port(string).

:- pred config_entry(config_item::out,
    list(string)::in, list(string)::out) is semidet.
config_entry(database(DB)) --> ["database"], [DB].
config_entry(port(P))      --> ["port"], [P].

:- pred config(list(config_item)::out,
    list(string)::in, list(string)::out) is semidet.
config([E|Es]) --> config_entry(E), config(Es).
config([])     --> [].

% Verwendung der DSL
main(!IO) :-
    Input = ["database", "postgresql", "port", "5432"],
    ( if config(Config, Input, []) then
        io.print_line(Config, !IO)
        % [database("postgresql"), port("5432")]
    else
        io.write_string("Parse failed\n", !IO)
    ).
```

**Besonderheiten:**
- DSL-Erstellung über Definite Clause Grammars (DCGs)
- `-->` Notation für typsichere und mode-geprüfte Grammatik-Regeln
- DCGs transformieren Listen — typsicher und deterministisch geprüft
- Keine dynamischen Operatoren oder Makros — primär parsing-basierte DSLs

**Weiterführende Links:**
- [Mercury Language Reference - DCG Rules](https://www.mercurylang.org/information/doc-release/mercury_ref/DCG-rules.html)

</TabItem>
</Tabs>

