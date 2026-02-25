---
slug: /spezialisierte-features/wissenschaftliches-computing
title: 19.2. Wissenschaftliches Computing
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 19.2. Wissenschaftliches Computing

Numerische Features, Matrix-Operationen, symbolische Berechnung.

## 19.2.1. Matrix Operations

Operationen auf Matrizen wie Multiplikation, Addition, Transposition und Inversion. Unterstützt sowohl elementweise als auch mathematische Matrix-Operationen.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'cpp', 'fortran', 'go', 'java', 'julia', 'matlab', 'mojo', 'octave', 'python', 'r', 'rust', 'wolfram-language']}>
<TabItem value="csharp" label="C#">

```csharp
// Benötigt: using System.Numerics;
var matrix1 = new Matrix4x4(
    1, 2, 3, 4,
    5, 6, 7, 8,
    9, 10, 11, 12,
    13, 14, 15, 16
);
var matrix2 = Matrix4x4.Identity;
var result = Matrix4x4.Multiply(matrix1, matrix2);
```

**Besonderheiten:**
- `System.Numerics.Matrix4x4` für 4x4-Matrizen (seit .NET Framework 4.5)
- Für allgemeine Matrizen sind externe Bibliotheken wie Math.NET erforderlich

**Weiterführende Links:**
- [Microsoft .NET Documentation - Matrix4x4](https://learn.microsoft.com/en-us/dotnet/api/system.numerics.matrix4x4)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Benötigt: #include <Eigen/Dense>
Eigen::MatrixXd matrix1(2, 2);
matrix1 << 1, 2,
           3, 4;
Eigen::MatrixXd matrix2(2, 2);
matrix2 << 5, 6,
           7, 8;
Eigen::MatrixXd result = matrix1 * matrix2;
```

**Besonderheiten:**
- Eigen-Bibliothek bietet umfangreiche Matrix-Operationen
- Unterstützt sowohl statische als auch dynamische Matrizen
- Optimiert für numerische Berechnungen

**Weiterführende Links:**
- [Eigen Documentation](https://eigen.tuxfamily.org/dox/)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
real, dimension(2, 2) :: matrix1, matrix2, result
matrix1 = reshape([1.0, 3.0, 2.0, 4.0], [2, 2])
matrix2 = reshape([5.0, 7.0, 6.0, 8.0], [2, 2])
result = matmul(matrix1, matrix2)
```

**Besonderheiten:**
- `matmul()` für Matrix-Multiplikation (seit Fortran 90)
- Native Unterstützung für mehrdimensionale Arrays
- Optimiert für numerische Berechnungen

**Weiterführende Links:**
- [Fortran Wiki - Matrix Operations](https://fortranwiki.org/fortran/show/Matrix+operations)

</TabItem>
<TabItem value="go" label="Go">

```go
// Benötigt: gonum.org/v1/gonum/mat
matrix1 := mat.NewDense(2, 2, []float64{
    1, 2,
    3, 4,
})
matrix2 := mat.NewDense(2, 2, []float64{
    5, 6,
    7, 8,
})
var result mat.Dense
result.Mul(matrix1, matrix2)
```

**Besonderheiten:**
- Gonum-Bibliothek bietet Matrix-Operationen
- Matrizen sind immutable in Bezug auf Dimensionen

**Weiterführende Links:**
- [Gonum Documentation](https://pkg.go.dev/gonum.org/v1/gonum/mat)

</TabItem>
<TabItem value="java" label="Java">

```java
// Benötigt: org.apache.commons.math3.linear
RealMatrix matrix1 = new Array2DRowRealMatrix(new double[][] {
    {1, 2},
    {3, 4}
});
RealMatrix matrix2 = new Array2DRowRealMatrix(new double[][] {
    {5, 6},
    {7, 8}
});
RealMatrix result = matrix1.multiply(matrix2);
```

**Besonderheiten:**
- Apache Commons Math bietet umfangreiche Matrix-Operationen
- Unterstützt verschiedene Matrix-Implementierungen

**Weiterführende Links:**
- [Apache Commons Math Documentation](https://commons.apache.org/proper/commons-math/userguide/linear.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
matrix1 = [1 2; 3 4]
matrix2 = [5 6; 7 8]
result = matrix1 * matrix2
```

**Besonderheiten:**
- Native Matrix-Unterstützung ohne externe Bibliotheken
- `*` führt Matrix-Multiplikation durch, `.*` elementweise Multiplikation
- Optimiert für numerische Berechnungen

**Weiterführende Links:**
- [Julia Documentation - Arrays](https://docs.julialang.org/en/v1/manual/arrays/)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
matrix1 = [1, 2; 3, 4];
matrix2 = [5, 6; 7, 8];
result = matrix1 * matrix2;
```

**Besonderheiten:**
- Native Matrix-Unterstützung als Kern-Feature
- `*` führt Matrix-Multiplikation durch, `.*` elementweise Multiplikation
- Optimiert für numerische Berechnungen

**Weiterführende Links:**
- [MATLAB Documentation - Matrix Operations](https://www.mathworks.com/help/matlab/matlab_prog/matrix-operations.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Benötigt: numpy
from numpy import array, dot
matrix1 = array([[1, 2], [3, 4]])
matrix2 = array([[5, 6], [7, 8]])
result = dot(matrix1, matrix2)
```

**Besonderheiten:**
- Verwendet NumPy-ähnliche Syntax
- Unterstützt Matrix-Operationen über NumPy

**Weiterführende Links:**
- [Mojo Documentation](https://docs.modular.com/mojo/)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
matrix1 = [1, 2; 3, 4];
matrix2 = [5, 6; 7, 8];
result = matrix1 * matrix2;
```

**Besonderheiten:**
- MATLAB-kompatible Syntax
- Native Matrix-Unterstützung
- `*` führt Matrix-Multiplikation durch, `.*` elementweise Multiplikation

**Weiterführende Links:**
- [GNU Octave Documentation - Matrices](https://octave.org/doc/v8.1.0/Matrices.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Benötigt: import numpy as np
matrix1 = np.array([[1, 2], [3, 4]])
matrix2 = np.array([[5, 6], [7, 8]])
result = np.dot(matrix1, matrix2)
```

**Besonderheiten:**
- NumPy bietet umfangreiche Matrix-Operationen
- `np.dot()` für Matrix-Multiplikation, `@` Operator (seit Python 3.5)
- `*` führt elementweise Multiplikation durch

**Weiterführende Links:**
- [NumPy Documentation - Matrix Operations](https://numpy.org/doc/stable/reference/routines.linalg.html)

</TabItem>
<TabItem value="r" label="R">

```r
matrix1 <- matrix(c(1, 3, 2, 4), nrow = 2, ncol = 2)
matrix2 <- matrix(c(5, 7, 6, 8), nrow = 2, ncol = 2)
result <- matrix1 %*% matrix2
```

**Besonderheiten:**
- `%*%` für Matrix-Multiplikation
- `*` führt elementweise Multiplikation durch
- Native Matrix-Unterstützung

**Weiterführende Links:**
- [R Documentation - Matrix Operations](https://stat.ethz.ch/R-manual/R-devel/library/base/html/matmult.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Benötigt: ndarray = "0.15"
use ndarray::prelude::*;
let matrix1 = array![[1., 2.], [3., 4.]];
let matrix2 = array![[5., 6.], [7., 8.]];
let result = matrix1.dot(&matrix2);
```

**Besonderheiten:**
- ndarray-Bibliothek bietet Matrix-Operationen
- Typ-sichere Matrix-Operationen zur Compile-Zeit

**Weiterführende Links:**
- [ndarray Documentation](https://docs.rs/ndarray/latest/ndarray/)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
matrix1 = {{1, 2}, {3, 4}};
matrix2 = {{5, 6}, {7, 8}};
result = matrix1 . matrix2
```

**Besonderheiten:**
- `.` für Matrix-Multiplikation
- `*` führt elementweise Multiplikation durch
- Native Matrix-Unterstützung mit symbolischen Berechnungen

**Weiterführende Links:**
- [Wolfram Language Documentation - Matrix Operations](https://reference.wolfram.com/language/guide/MatrixOperations.html)

</TabItem>
</Tabs>


## 19.2.2. Vector Operations

Operationen auf Vektoren wie Addition, Skalarprodukt, Kreuzprodukt und Norm-Berechnung. Unterstützt sowohl elementweise als auch mathematische Vektor-Operationen.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'cpp', 'fortran', 'go', 'java', 'julia', 'matlab', 'mojo', 'octave', 'python', 'r', 'rust', 'wolfram-language']}>
<TabItem value="csharp" label="C#">

```csharp
// Benötigt: using System.Numerics;
var vector1 = new Vector3(1, 2, 3);
var vector2 = new Vector3(4, 5, 6);
var sum = Vector3.Add(vector1, vector2);
var dotProduct = Vector3.Dot(vector1, vector2);
var crossProduct = Vector3.Cross(vector1, vector2);
```

**Besonderheiten:**
- `System.Numerics.Vector3` für 3D-Vektoren (seit .NET Framework 4.5)
- Für allgemeine Vektoren sind externe Bibliotheken wie Math.NET erforderlich

**Weiterführende Links:**
- [Microsoft .NET Documentation - Vector3](https://learn.microsoft.com/en-us/dotnet/api/system.numerics.vector3)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Benötigt: #include <Eigen/Dense>
Eigen::VectorXd vector1(3);
vector1 << 1, 2, 3;
Eigen::VectorXd vector2(3);
vector2 << 4, 5, 6;
Eigen::VectorXd sum = vector1 + vector2;
double dotProduct = vector1.dot(vector2);
```

**Besonderheiten:**
- Eigen-Bibliothek bietet umfangreiche Vektor-Operationen
- Unterstützt sowohl statische als auch dynamische Vektoren
- Optimiert für numerische Berechnungen

**Weiterführende Links:**
- [Eigen Documentation](https://eigen.tuxfamily.org/dox/)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
real, dimension(3) :: vector1, vector2, sum_vec
vector1 = [1.0, 2.0, 3.0]
vector2 = [4.0, 5.0, 6.0]
sum_vec = vector1 + vector2
dot_product = dot_product(vector1, vector2)
```

**Besonderheiten:**
- `dot_product()` für Skalarprodukt (seit Fortran 90)
- Native Unterstützung für Vektor-Operationen
- Optimiert für numerische Berechnungen

**Weiterführende Links:**
- [Fortran Wiki - Vector Operations](https://fortranwiki.org/fortran/show/Vector+operations)

</TabItem>
<TabItem value="go" label="Go">

```go
// Benötigt: gonum.org/v1/gonum/mat
vector1 := mat.NewVecDense(3, []float64{1, 2, 3})
vector2 := mat.NewVecDense(3, []float64{4, 5, 6})
var sum mat.VecDense
sum.AddVec(vector1, vector2)
dotProduct := mat.Dot(vector1, vector2)
```

**Besonderheiten:**
- Gonum-Bibliothek bietet Vektor-Operationen
- Vektoren sind immutable in Bezug auf Dimensionen

**Weiterführende Links:**
- [Gonum Documentation](https://pkg.go.dev/gonum.org/v1/gonum/mat)

</TabItem>
<TabItem value="java" label="Java">

```java
// Benötigt: org.apache.commons.math3.linear
RealVector vector1 = new ArrayRealVector(new double[] {1, 2, 3});
RealVector vector2 = new ArrayRealVector(new double[] {4, 5, 6});
RealVector sum = vector1.add(vector2);
double dotProduct = vector1.dotProduct(vector2);
```

**Besonderheiten:**
- Apache Commons Math bietet umfangreiche Vektor-Operationen
- Unterstützt verschiedene Vektor-Implementierungen

**Weiterführende Links:**
- [Apache Commons Math Documentation](https://commons.apache.org/proper/commons-math/userguide/linear.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
vector1 = [1, 2, 3]
vector2 = [4, 5, 6]
sum_vec = vector1 + vector2
dotProduct = dot(vector1, vector2)
```

**Besonderheiten:**
- Native Vektor-Unterstützung ohne externe Bibliotheken
- `dot()` für Skalarprodukt
- Optimiert für numerische Berechnungen

**Weiterführende Links:**
- [Julia Documentation - Arrays](https://docs.julialang.org/en/v1/manual/arrays/)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
vector1 = [1, 2, 3];
vector2 = [4, 5, 6];
sum_vec = vector1 + vector2;
dotProduct = dot(vector1, vector2);
```

**Besonderheiten:**
- Native Vektor-Unterstützung als Kern-Feature
- `dot()` für Skalarprodukt
- Optimiert für numerische Berechnungen

**Weiterführende Links:**
- [MATLAB Documentation - Vector Operations](https://www.mathworks.com/help/matlab/math/vector-and-matrix-operations.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Benötigt: numpy
from numpy import array, dot
vector1 = array([1, 2, 3])
vector2 = array([4, 5, 6])
sum_vec = vector1 + vector2
dotProduct = dot(vector1, vector2)
```

**Besonderheiten:**
- Verwendet NumPy-ähnliche Syntax
- Unterstützt Vektor-Operationen über NumPy

**Weiterführende Links:**
- [Mojo Documentation](https://docs.modular.com/mojo/)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
vector1 = [1, 2, 3];
vector2 = [4, 5, 6];
sum_vec = vector1 + vector2;
dotProduct = dot(vector1, vector2);
```

**Besonderheiten:**
- MATLAB-kompatible Syntax
- Native Vektor-Unterstützung
- `dot()` für Skalarprodukt

**Weiterführende Links:**
- [GNU Octave Documentation - Vectors](https://octave.org/doc/v8.1.0/Vectors-and-Matrices.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Benötigt: import numpy as np
vector1 = np.array([1, 2, 3])
vector2 = np.array([4, 5, 6])
sum_vec = vector1 + vector2
dotProduct = np.dot(vector1, vector2)
```

**Besonderheiten:**
- NumPy bietet umfangreiche Vektor-Operationen
- `np.dot()` für Skalarprodukt
- `*` führt elementweise Multiplikation durch

**Weiterführende Links:**
- [NumPy Documentation - Vector Operations](https://numpy.org/doc/stable/reference/routines.linalg.html)

</TabItem>
<TabItem value="r" label="R">

```r
vector1 <- c(1, 2, 3)
vector2 <- c(4, 5, 6)
sum_vec <- vector1 + vector2
dotProduct <- sum(vector1 * vector2)
```

**Besonderheiten:**
- `c()` für Vektorerstellung
- `sum(vector1 * vector2)` für Skalarprodukt
- Native Vektor-Unterstützung

**Weiterführende Links:**
- [R Documentation - Vector Operations](https://stat.ethz.ch/R-manual/R-devel/library/base/html/VectorOps.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Benötigt: ndarray = "0.15"
use ndarray::prelude::*;
let vector1 = array![1., 2., 3.];
let vector2 = array![4., 5., 6.];
let sum_vec = &vector1 + &vector2;
let dotProduct = vector1.dot(&vector2);
```

**Besonderheiten:**
- ndarray-Bibliothek bietet Vektor-Operationen
- Typ-sichere Vektor-Operationen zur Compile-Zeit

**Weiterführende Links:**
- [ndarray Documentation](https://docs.rs/ndarray/latest/ndarray/)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
vector1 = {1, 2, 3};
vector2 = {4, 5, 6};
sumVec = vector1 + vector2;
dotProduct = vector1 . vector2
```

**Besonderheiten:**
- `.` für Skalarprodukt
- `*` führt elementweise Multiplikation durch
- Native Vektor-Unterstützung mit symbolischen Berechnungen

**Weiterführende Links:**
- [Wolfram Language Documentation - Vector Operations](https://reference.wolfram.com/language/guide/VectorOperations.html)

</TabItem>
</Tabs>


## 19.2.3. Complex Numbers

Eingebaute Unterstützung für komplexe Zahlen mit Real- und Imaginärteil. Ermöglicht arithmetische Operationen und mathematische Funktionen auf komplexen Zahlen.

### Sprachen {#sprachen}

<Tabs availableTabs={['c', 'common-lisp', 'cpp', 'csharp', 'dart', 'fortran', 'go', 'haskell', 'julia', 'matlab', 'mojo', 'ocaml', 'octave', 'python', 'r', 'rust', 'swift', 'wolfram-language']} orangeTabs={['java', 'kotlin', 'scala', 'zig']}>
<TabItem value="c" label="C">

```c
// Benötigt: #include <complex.h>
double complex z1 = 1.0 + 2.0 * I;
double complex z2 = 3.0 + 4.0 * I;
double complex sum = z1 + z2;
double real_part = creal(sum);
double imag_part = cimag(sum);
```

**Besonderheiten:**
- Unterstützung seit C99
- `I` für die imaginäre Einheit
- `creal()` und `cimag()` für Real- und Imaginärteil

**Weiterführende Links:**
- [C Standard Library - Complex Numbers](https://en.cppreference.com/w/c/numeric/complex)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Benötigt: using System.Numerics;
var z1 = new Complex(1.0, 2.0);
var z2 = new Complex(3.0, 4.0);
var sum = z1 + z2;
double realPart = sum.Real;
double imagPart = sum.Imaginary;
```

**Besonderheiten:**
- `System.Numerics.Complex` (seit .NET Framework 4.0)
- Unterstützt arithmetische Operationen und mathematische Funktionen

**Weiterführende Links:**
- [Microsoft .NET Documentation - Complex](https://learn.microsoft.com/en-us/dotnet/api/system.numerics.complex)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Benötigt: #include <complex>
std::complex<double> z1(1.0, 2.0);
std::complex<double> z2(3.0, 4.0);
std::complex<double> sum = z1 + z2;
double realPart = sum.real();
double imagPart = sum.imag();
```

**Besonderheiten:**
- `std::complex` Template-Klasse
- Unterstützt arithmetische Operationen und mathematische Funktionen
- Teil der Standard-Bibliothek

**Weiterführende Links:**
- [cppreference.com - std::complex](https://en.cppreference.com/w/cpp/numeric/complex)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Benötigt: package:complex
import 'package:complex/complex.dart';
var z1 = Complex(1.0, 2.0);
var z2 = Complex(3.0, 4.0);
var sum = z1 + z2;
double realPart = sum.real;
double imagPart = sum.imaginary;
```

**Besonderheiten:**
- Externe Bibliothek `package:complex` erforderlich
- Unterstützt arithmetische Operationen

**Weiterführende Links:**
- [Dart complex package](https://pub.dev/packages/complex)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
complex :: z1, z2, sum
z1 = (1.0, 2.0)
z2 = (3.0, 4.0)
sum = z1 + z2
```

**Besonderheiten:**
- Native Unterstützung für komplexe Zahlen
- Syntax: `(real, imag)` für komplexe Literale
- Unterstützt arithmetische Operationen und mathematische Funktionen

**Weiterführende Links:**
- [Fortran Wiki - Complex Numbers](https://fortranwiki.org/fortran/show/Complex+numbers)

</TabItem>
<TabItem value="go" label="Go">

```go
// Benötigt: github.com/meirizarrygelpi/cmplx
import "github.com/meirizarrygelpi/cmplx"
z1 := cmplx.New(1.0, 2.0)
z2 := cmplx.New(3.0, 4.0)
sum := z1.Add(z2)
```

**Besonderheiten:**
- Externe Bibliotheken erforderlich
- Standard-Bibliothek bietet `complex64` und `complex128` Typen mit eingeschränkter Funktionalität

**Weiterführende Links:**
- [Go Documentation - Complex Numbers](https://pkg.go.dev/builtin#complex)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Benötigt: Data.Complex
import Data.Complex
z1 = 1.0 :+ 2.0
z2 = 3.0 :+ 4.0
sum = z1 + z2
realPart = realPart sum
imagPart = imagPart sum
```

**Besonderheiten:**
- `Data.Complex` Modul
- Syntax: `real :+ imag` für komplexe Literale
- Unterstützt arithmetische Operationen und mathematische Funktionen

**Weiterführende Links:**
- [Haskell Documentation - Data.Complex](https://hackage.haskell.org/package/base/docs/Data-Complex.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// Keine native Unterstützung, externe Bibliotheken erforderlich
// Beispiel mit Apache Commons Math
// Benötigt: org.apache.commons.math3.complex
Complex z1 = new Complex(1.0, 2.0);
Complex z2 = new Complex(3.0, 4.0);
Complex sum = z1.add(z2);
double realPart = sum.getReal();
double imagPart = sum.getImaginary();
```

**Besonderheiten:**
- Keine native Unterstützung in der Standard-Bibliothek
- Apache Commons Math bietet `Complex` Klasse

**Weiterführende Links:**
- [Apache Commons Math Documentation - Complex](https://commons.apache.org/proper/commons-math/apidocs/org/apache/commons/math3/complex/Complex.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
z1 = 1.0 + 2.0im
z2 = 3.0 + 4.0im
sum = z1 + z2
realPart = real(sum)
imagPart = imag(sum)
```

**Besonderheiten:**
- Native Unterstützung für komplexe Zahlen
- Syntax: `real + imag*im` oder `real + imagim`
- Optimiert für numerische Berechnungen

**Weiterführende Links:**
- [Julia Documentation - Complex Numbers](https://docs.julialang.org/en/v1/manual/complex-and-rational-numbers/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Keine native Unterstützung, externe Bibliotheken erforderlich
// Beispiel mit Apache Commons Math
// Benötigt: org.apache.commons:commons-math3
import org.apache.commons.math3.complex.Complex
val z1 = Complex(1.0, 2.0)
val z2 = Complex(3.0, 4.0)
val sum = z1.add(z2)
val realPart = sum.real
val imagPart = sum.imaginary
```

**Besonderheiten:**
- Keine native Unterstützung in der Standard-Bibliothek
- Apache Commons Math bietet `Complex` Klasse

**Weiterführende Links:**
- [Apache Commons Math Documentation - Complex](https://commons.apache.org/proper/commons-math/apidocs/org/apache/commons/math3/complex/Complex.html)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
z1 = 1 + 2i;
z2 = 3 + 4i;
sum = z1 + z2;
realPart = real(sum);
imagPart = imag(sum);
```

**Besonderheiten:**
- Native Unterstützung für komplexe Zahlen
- Syntax: `real + imag*i` oder `real + imag*j`
- Optimiert für numerische Berechnungen

**Weiterführende Links:**
- [MATLAB Documentation - Complex Numbers](https://www.mathworks.com/help/matlab/ref/complex.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Benötigt: cmath (Standard-Bibliothek)
import cmath
z1 = complex(1.0, 2.0)
z2 = complex(3.0, 4.0)
sum = z1 + z2
realPart = sum.real
imagPart = sum.imag
```

**Besonderheiten:**
- Verwendet Python-ähnliche Syntax
- `cmath` Modul für mathematische Funktionen

**Weiterführende Links:**
- [Mojo Documentation](https://docs.modular.com/mojo/)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Benötigt: Complex module *)
open Complex
let z1 = { re = 1.0; im = 2.0 }
let z2 = { re = 3.0; im = 4.0 }
let sum = add z1 z2
let realPart = sum.re
let imagPart = sum.im
```

**Besonderheiten:**
- `Complex` Modul in der Standard-Bibliothek
- Record-basierte Darstellung

**Weiterführende Links:**
- [OCaml Documentation - Complex](https://v2.ocaml.org/api/Complex.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
z1 = 1 + 2i;
z2 = 3 + 4i;
sum = z1 + z2;
realPart = real(sum);
imagPart = imag(sum);
```

**Besonderheiten:**
- MATLAB-kompatible Syntax
- Native Unterstützung für komplexe Zahlen
- Syntax: `real + imag*i` oder `real + imag*j`

**Weiterführende Links:**
- [GNU Octave Documentation - Complex Numbers](https://octave.org/doc/v8.1.0/Complex-Arithmetic.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# cmath ist Teil der Standard-Bibliothek
import cmath
z1 = complex(1.0, 2.0)
z2 = complex(3.0, 4.0)
sum = z1 + z2
realPart = sum.real
imagPart = sum.imag
```

**Besonderheiten:**
- `complex` Typ in der Standard-Bibliothek
- `cmath` Modul für mathematische Funktionen
- Syntax: `complex(real, imag)` oder `real + imagj`

**Weiterführende Links:**
- [Python Documentation - Complex Numbers](https://docs.python.org/3/library/cmath.html)

</TabItem>
<TabItem value="r" label="R">

```r
z1 <- complex(real = 1.0, imaginary = 2.0)
z2 <- complex(real = 3.0, imaginary = 4.0)
sum <- z1 + z2
realPart <- Re(sum)
imagPart <- Im(sum)
```

**Besonderheiten:**
- Native Unterstützung für komplexe Zahlen
- `complex()` Funktion für Erstellung
- `Re()` und `Im()` für Real- und Imaginärteil

**Weiterführende Links:**
- [R Documentation - Complex Numbers](https://stat.ethz.ch/R-manual/R-devel/library/base/html/complex.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Benötigt: num-complex = "0.4"
use num_complex::Complex;
let z1 = Complex::new(1.0, 2.0);
let z2 = Complex::new(3.0, 4.0);
let sum = z1 + z2;
let realPart = sum.re;
let imagPart = sum.im;
```

**Besonderheiten:**
- `num-complex` Crate bietet komplexe Zahlen
- Typ-sichere Operationen zur Compile-Zeit

**Weiterführende Links:**
- [num-complex Documentation](https://docs.rs/num-complex/latest/num_complex/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Keine native Unterstützung, externe Bibliotheken erforderlich
// Beispiel mit Apache Commons Math
// Benötigt: org.apache.commons:commons-math3
import org.apache.commons.math3.complex.Complex
val z1 = new Complex(1.0, 2.0)
val z2 = new Complex(3.0, 4.0)
val sum = z1.add(z2)
val realPart = sum.getReal
val imagPart = sum.getImaginary
```

**Besonderheiten:**
- Keine native Unterstützung in der Standard-Bibliothek
- Apache Commons Math bietet `Complex` Klasse

**Weiterführende Links:**
- [Apache Commons Math Documentation - Complex](https://commons.apache.org/proper/commons-math/apidocs/org/apache/commons/math3/complex/Complex.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
import Foundation
let z1 = Complex(real: 1.0, imaginary: 2.0)
let z2 = Complex(real: 3.0, imaginary: 4.0)
let sum = z1 + z2
let realPart = sum.real
let imagPart = sum.imaginary
```

**Besonderheiten:**
- `Foundation.Complex` (seit Swift 5.0)
- Unterstützt arithmetische Operationen

**Weiterführende Links:**
- [Swift Documentation - Complex Numbers](https://developer.apple.com/documentation/foundation/complex)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
z1 = 1 + 2 I
z2 = 3 + 4 I
sum = z1 + z2
realPart = Re[sum]
imagPart = Im[sum]
```

**Besonderheiten:**
- Native Unterstützung für komplexe Zahlen
- Syntax: `real + imag*I`
- Unterstützt symbolische Berechnungen

**Weiterführende Links:**
- [Wolfram Language Documentation - Complex Numbers](https://reference.wolfram.com/language/guide/ComplexNumbers.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// Keine native Unterstützung, externe Bibliotheken erforderlich
// Beispiel mit benutzerdefiniertem Typ
const Complex = struct {
    real: f64,
    imag: f64,
    
    pub fn add(self: Complex, other: Complex) Complex {
        return Complex{ .real = self.real + other.real, .imag = self.imag + other.imag };
    }
};

const z1 = Complex{ .real = 1.0, .imag = 2.0 };
const z2 = Complex{ .real = 3.0, .imag = 4.0 };
const sum = z1.add(z2);
```

**Besonderheiten:**
- Keine native Unterstützung in der Standard-Bibliothek
- Benutzerdefinierte Typen erforderlich

**Weiterführende Links:**
- [Zig Documentation](https://ziglang.org/documentation/)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Komplexe Zahlen (native Unterstützung)
(defvar z1 #C(3 4))     ; 3 + 4i
(defvar z2 #C(1 -2))    ; 1 - 2i

;; Arithmetik
(+ z1 z2)               ; #C(4 2)
(* z1 z2)               ; #C(11 -2)

;; Funktionen
(abs z1)                 ; 5.0 (Betrag)
(phase z1)               ; 0.9272952 (Winkel)
(realpart z1)            ; 3
(imagpart z1)            ; 4
(conjugate z1)           ; #C(3 -4)
```

**Besonderheiten:**
- Native Unterstützung für komplexe Zahlen mit `#C(real imag)` Syntax
- Alle arithmetischen Operatoren arbeiten mit komplexen Zahlen
- `abs`, `phase`, `realpart`, `imagpart`, `conjugate` als Standardfunktionen
- Komplexe Zahlen mit Ganzzahl- oder Fließkomma-Komponenten

**Weiterführende Links:**
- [Common Lisp HyperSpec - Complex](http://www.lispworks.com/documentation/HyperSpec/Body/t_comple.htm)

</TabItem>

</Tabs>


## 19.2.4. Arbitrary Precision Arithmetic

Arithmetische Operationen mit beliebiger Genauigkeit, die nicht durch die Standard-Datentypen (int, float) begrenzt sind. Ermöglicht Berechnungen mit sehr großen Zahlen oder hoher Präzision.

### Sprachen {#sprachen}

<Tabs availableTabs={['c', 'csharp', 'cpp', 'clojure', 'common-lisp', 'dart', 'go', 'haskell', 'java', 'javascript', 'julia', 'kotlin', 'mercury', 'ocaml', 'perl', 'php', 'prolog', 'python', 'r', 'racket', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'wolfram-language']} orangeTabs={['lua']}>
<TabItem value="c" label="C">

```c
// Benötigt: GMP (GNU Multiple Precision Arithmetic Library)
#include <gmp.h>
mpz_t a, b, result;
mpz_init_set_str(a, "123456789012345678901234567890", 10);
mpz_init_set_str(b, "987654321098765432109876543210", 10);
mpz_init(result);
mpz_add(result, a, b);
```

**Besonderheiten:**
- GMP-Bibliothek erforderlich
- Separate Funktionen für verschiedene Operationen
- Sehr performant für große Zahlen

**Weiterführende Links:**
- [GMP Documentation](https://gmplib.org/manual/)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Benötigt: System.Numerics.BigInteger
using System.Numerics;
var a = BigInteger.Parse("123456789012345678901234567890");
var b = BigInteger.Parse("987654321098765432109876543210");
var result = a + b;
```

**Besonderheiten:**
- `BigInteger` für ganze Zahlen (seit .NET Framework 4.0)
- Für Dezimalzahlen: `decimal` Typ mit 28-29 signifikanten Ziffern

**Weiterführende Links:**
- [Microsoft .NET Documentation - BigInteger](https://learn.microsoft.com/en-us/dotnet/api/system.numerics.biginteger)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Benötigt: GMP oder Boost.Multiprecision
#include <boost/multiprecision/cpp_int.hpp>
using namespace boost::multiprecision;
cpp_int a("123456789012345678901234567890");
cpp_int b("987654321098765432109876543210");
cpp_int result = a + b;
```

**Besonderheiten:**
- Boost.Multiprecision oder GMP-Bibliothek erforderlich
- Unterstützt verschiedene Präzisionsstufen

**Weiterführende Links:**
- [Boost.Multiprecision Documentation](https://www.boost.org/doc/libs/1_84_0/libs/multiprecision/doc/html/index.html)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(def a (bigint "123456789012345678901234567890"))
(def b (bigint "987654321098765432109876543210"))
(def result (+ a b))
```

**Besonderheiten:**
- `bigint` für ganze Zahlen mit beliebiger Genauigkeit
- Automatische Promotion zu `bigint` bei Überlauf
- `bigdec` für Dezimalzahlen mit beliebiger Genauigkeit

**Weiterführende Links:**
- [Clojure Documentation - Arbitrary Precision](https://clojure.org/reference/data_structures#_arbitrary_precision_numbers)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defvar a (parse-integer "123456789012345678901234567890"))
(defvar b (parse-integer "987654321098765432109876543210"))
(defvar result (+ a b))
```

**Besonderheiten:**
- Native Unterstützung für beliebig große ganze Zahlen
- Automatische Promotion bei Bedarf
- Rationale Zahlen mit beliebiger Genauigkeit

**Weiterführende Links:**
- [Common Lisp HyperSpec - Numbers](http://www.lispworks.com/documentation/HyperSpec/Body/t_number.htm)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Benötigt: package:decimal
import 'package:decimal/decimal.dart';
var a = Decimal.parse("123456789012345678901234567890");
var b = Decimal.parse("987654321098765432109876543210");
var result = a + b;
```

**Besonderheiten:**
- Externe Bibliotheken erforderlich
- `package:decimal` für Dezimalzahlen mit beliebiger Genauigkeit

**Weiterführende Links:**
- [Dart decimal package](https://pub.dev/packages/decimal)

</TabItem>
<TabItem value="go" label="Go">

```go
// Benötigt: math/big
import "math/big"
a, _ := new(big.Int).SetString("123456789012345678901234567890", 10)
b, _ := new(big.Int).SetString("987654321098765432109876543210", 10)
result := new(big.Int).Add(a, b)
```

**Besonderheiten:**
- `math/big` Paket in der Standard-Bibliothek
- `big.Int` für ganze Zahlen, `big.Float` für Fließkommazahlen
- Methoden-basierte API

**Weiterführende Links:**
- [Go Documentation - math/big](https://pkg.go.dev/math/big)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Integer hat beliebige Genauigkeit (eingebaut, kein Import nötig)
a :: Integer
a = 123456789012345678901234567890

b :: Integer
b = 987654321098765432109876543210

result :: Integer
result = a + b  -- 1111111110111111111011111111100

-- Rationale Zahlen mit beliebiger Genauigkeit
-- Benötigt: Data.Ratio
ratio :: Rational
ratio = 1 % 3 + 1 % 6  -- ergibt 1 % 2
```

**Besonderheiten:**
- `Integer` ist ein eingebauter Typ mit beliebiger Genauigkeit (kein Import nötig)
- `Rational` (aus `Data.Ratio`) für rationale Zahlen mit beliebiger Genauigkeit
- Automatische Promotion von `Int` zu `Integer` bei Bedarf
- GHC verwendet GMP (GNU Multiple Precision Arithmetic Library) für die Implementierung

**Weiterführende Links:**
- [Haskell Prelude - Integer](https://hackage.haskell.org/package/base/docs/Prelude.html#t:Integer)

</TabItem>
<TabItem value="java" label="Java">

```java
import java.math.BigInteger;
BigInteger a = new BigInteger("123456789012345678901234567890");
BigInteger b = new BigInteger("987654321098765432109876543210");
BigInteger result = a.add(b);
```

**Besonderheiten:**
- `BigInteger` für ganze Zahlen (seit Java 1.1)
- `BigDecimal` für Dezimalzahlen mit beliebiger Genauigkeit
- Immutable Typen

**Weiterführende Links:**
- [Java Documentation - BigInteger](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/math/BigInteger.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Benötigt: big.js oder decimal.js
const Big = require('big.js');
const a = new Big("123456789012345678901234567890");
const b = new Big("987654321098765432109876543210");
const result = a.plus(b);
```

**Besonderheiten:**
- Keine native Unterstützung
- Externe Bibliotheken wie `big.js` oder `decimal.js` erforderlich
- Native `Number` Typ hat begrenzte Präzision

**Weiterführende Links:**
- [big.js Documentation](https://mikemcl.github.io/big.js/)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
a = BigInt("123456789012345678901234567890")
b = BigInt("987654321098765432109876543210")
result = a + b
```

**Besonderheiten:**
- `BigInt` für ganze Zahlen mit beliebiger Genauigkeit
- `BigFloat` für Fließkommazahlen mit konfigurierbarer Genauigkeit
- Native Unterstützung

**Weiterführende Links:**
- [Julia Documentation - BigInt and BigFloat](https://docs.julialang.org/en/v1/manual/integers-and-floating-point-numbers/#BigInt-and-BigFloat)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
import java.math.BigInteger
val a = BigInteger("123456789012345678901234567890")
val b = BigInteger("987654321098765432109876543210")
val result = a.add(b)
```

**Besonderheiten:**
- Verwendet Java's `BigInteger` und `BigDecimal`
- Interoperabilität mit Java

**Weiterführende Links:**
- [Kotlin Documentation - Numbers](https://kotlinlang.org/docs/numbers.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Benötigt: lua-bint oder externe Bibliothek
-- Beispiel mit lua-bint
local bint = require("bint")
local a = bint("123456789012345678901234567890")
local b = bint("987654321098765432109876543210")
local result = a + b
```

**Besonderheiten:**
- Keine native Unterstützung
- Externe Bibliotheken erforderlich

**Weiterführende Links:**
- [lua-bint Documentation](https://github.com/edubart/lua-bint)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Modul integer aus der Standard-Bibliothek (GMP-basiert)
:- import_module integer.

:- pred compute(integer::out) is det.
compute(Result) :-
    A = integer.det_from_string(
        "123456789012345678901234567890"),
    B = integer.det_from_string(
        "987654321098765432109876543210"),
    Result = A + B.

% Fakultät mit beliebig großen Zahlen
:- func factorial(integer) = integer.
factorial(N) =
    ( if N =< integer.zero then integer.one
      else N * factorial(N - integer.one)
    ).
```

**Besonderheiten:**
- `integer`-Modul in der Standard-Bibliothek für beliebig große Ganzzahlen
- Intern über GMP (GNU Multiple Precision Arithmetic Library) implementiert
- Standardmäßiger `int`-Typ ist maschinenbreit; `integer` bietet beliebige Präzision
- Arithmetische Operatoren (`+`, `-`, `*`, `//`, `mod`) für `integer` überladen

**Weiterführende Links:**
- [Mercury Standard Library - integer](https://www.mercurylang.org/information/doc-release/mercury_library/integer.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Benötigt: Zarith library *)
open Zarith
let a = Z.of_string "123456789012345678901234567890"
let b = Z.of_string "987654321098765432109876543210"
let result = Z.add a b
```

**Besonderheiten:**
- Zarith-Bibliothek für beliebig große ganze Zahlen
- Sehr performant

**Weiterführende Links:**
- [Zarith Documentation](https://github.com/ocaml/Zarith)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
use Math::BigInt;
my $a = Math::BigInt->new("123456789012345678901234567890");
my $b = Math::BigInt->new("987654321098765432109876543210");
my $result = $a + $b;
```

**Besonderheiten:**
- `Math::BigInt` für ganze Zahlen
- `Math::BigFloat` für Fließkommazahlen
- Automatische Promotion mit `use bignum;`

**Weiterführende Links:**
- [Perl Documentation - Math::BigInt](https://metacpan.org/pod/Math::BigInt)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Benötigt: BCMath extension
$a = "123456789012345678901234567890";
$b = "987654321098765432109876543210";
$result = bcadd($a, $b);
```

**Besonderheiten:**
- BCMath Extension für beliebige Genauigkeit
- String-basierte API
- `bcadd()`, `bcmul()`, etc. für Operationen

**Weiterführende Links:**
- [PHP Documentation - BCMath](https://www.php.net/manual/en/book.bc.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% SWI-Prolog unterstützt nativ beliebig große Integer (via GMP)
A is 123456789012345678901234567890,
B is 987654321098765432109876543210,
Result is A + B.
% Result = 1111111110111111111011111111100

% Fakultät mit großen Zahlen
factorial(0, 1).
factorial(N, F) :-
    N > 0,
    N1 is N - 1,
    factorial(N1, F1),
    F is N * F1.

% ?- factorial(100, F).
% F = 93326215443944152681699238856266700490715968264381621468...
```

**Besonderheiten:**
- SWI-Prolog verwendet intern die GMP-Bibliothek und unterstützt nativ beliebig große Integer.
- Ganzzahl-Arithmetik wechselt automatisch zu Arbitrary Precision, wenn Werte den Maschinenbereich überschreiten.
- Rationale Zahlen (`rdiv/2`) werden ebenfalls mit beliebiger Genauigkeit unterstützt.
- `is/2` evaluiert arithmetische Ausdrücke.

**Weiterführende Links:**
- [SWI-Prolog Manual - Arithmetic](https://www.swi-prolog.org/pldoc/man?section=arith)
- [SWI-Prolog Manual - GMP Support](https://www.swi-prolog.org/pldoc/man?section=gmp)

</TabItem>
<TabItem value="python" label="Python">

```python
a = int("123456789012345678901234567890")
b = int("987654321098765432109876543210")
result = a + b
```

**Besonderheiten:**
- Native Unterstützung für beliebig große ganze Zahlen
- Automatische Promotion von `int` zu `long` (Python 2) oder unbegrenztem `int` (Python 3)
- `decimal.Decimal` für Dezimalzahlen mit beliebiger Genauigkeit

**Weiterführende Links:**
- [Python Documentation - Numeric Types](https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex)

</TabItem>
<TabItem value="r" label="R">

```r
# Benötigt: Rmpfr package
library(Rmpfr)
a <- mpfr("123456789012345678901234567890", precBits = 256)
b <- mpfr("987654321098765432109876543210", precBits = 256)
result <- a + b
```

**Besonderheiten:**
- Rmpfr-Paket für beliebige Genauigkeit
- Konfigurierbare Präzision

**Weiterführende Links:**
- [Rmpfr Documentation](https://cran.r-project.org/package=Rmpfr)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define a (string->number "123456789012345678901234567890"))
(define b (string->number "987654321098765432109876543210"))
(define result (+ a b))
```

**Besonderheiten:**
- Native Unterstützung für beliebig große ganze Zahlen
- Automatische Promotion
- Rationale Zahlen mit beliebiger Genauigkeit

**Weiterführende Links:**
- [Racket Documentation - Numbers](https://docs.racket-lang.org/reference/numbers.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
a = "123456789012345678901234567890".to_i
b = "987654321098765432109876543210".to_i
result = a + b
```

**Besonderheiten:**
- Native Unterstützung für beliebig große ganze Zahlen
- Automatische Promotion
- `BigDecimal` für Dezimalzahlen mit beliebiger Genauigkeit

**Weiterführende Links:**
- [Ruby Documentation - Integer](https://ruby-doc.org/core-3.1.2/Integer.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Benötigt: num-bigint = "0.4"
use num_bigint::BigInt;
let a = BigInt::parse_bytes(b"123456789012345678901234567890", 10).unwrap();
let b = BigInt::parse_bytes(b"987654321098765432109876543210", 10).unwrap();
let result = a + b;
```

**Besonderheiten:**
- `num-bigint` Crate für beliebig große ganze Zahlen
- Typ-sichere Operationen

**Weiterführende Links:**
- [num-bigint Documentation](https://docs.rs/num-bigint/latest/num_bigint/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
import java.math.BigInteger
val a = new BigInteger("123456789012345678901234567890")
val b = new BigInteger("987654321098765432109876543210")
val result = a.add(b)
```

**Besonderheiten:**
- Verwendet Java's `BigInteger` und `BigDecimal`
- Interoperabilität mit Java

**Weiterführende Links:**
- [Scala Documentation - Numbers](https://docs.scala-lang.org/overviews/scala-book/numbers.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define a (string->number "123456789012345678901234567890"))
(define b (string->number "987654321098765432109876543210"))
(define result (+ a b))
```

**Besonderheiten:**
- Native Unterstützung für beliebig große ganze Zahlen
- Automatische Promotion
- Rationale Zahlen mit beliebiger Genauigkeit

**Weiterführende Links:**
- [R7RS Scheme Specification - Numbers](https://small.r7rs.org/attachment/r7rs.pdf)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
import Foundation
let a = Decimal(string: "123456789012345678901234567890")!
let b = Decimal(string: "987654321098765432109876543210")!
let result = a + b
```

**Besonderheiten:**
- `Decimal` Typ für Dezimalzahlen mit 38 signifikanten Ziffern
- Für ganze Zahlen: `NSDecimalNumber` oder externe Bibliotheken

**Weiterführende Links:**
- [Swift Documentation - Decimal](https://developer.apple.com/documentation/foundation/decimal)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Benötigt: big.js oder decimal.js
import { Big } from 'big.js';
const a = new Big("123456789012345678901234567890");
const b = new Big("987654321098765432109876543210");
const result = a.plus(b);
```

**Besonderheiten:**
- Keine native Unterstützung
- Externe Bibliotheken wie `big.js` oder `decimal.js` erforderlich
- Native `number` Typ hat begrenzte Präzision

**Weiterführende Links:**
- [big.js Documentation](https://mikemcl.github.io/big.js/)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Arbitrary Precision Arithmetic - nativ unterstützt *)
a = 123456789012345678901234567890
b = 987654321098765432109876543210
result = a + b
(* 1111111110111111111011111111100 *)

(* Beliebige Präzision für Fließkommazahlen *)
N[Pi, 100]  (* Pi mit 100 Stellen *)
```

**Besonderheiten:**
- Native Unterstützung für beliebig große Integer
- Automatische Präzisionserhöhung bei Bedarf
- `N[expr, n]` für beliebige Fließkomma-Präzision

**Weiterführende Links:**
- [Wolfram Language Documentation - Arbitrary-Precision Numbers](https://reference.wolfram.com/language/tutorial/ArbitraryPrecisionNumbers.html)

</TabItem>
</Tabs>


## 19.2.5. Symbolic Computation

Symbolische Mathematik und algebraische Manipulation von Ausdrücken. Ermöglicht Berechnungen mit Variablen, Ableitungen, Integrationen und symbolischen Vereinfachungen ohne numerische Auswertung.

### Sprachen {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'julia', 'python', 'r', 'racket', 'ruby', 'scheme', 'wolfram-language']} orangeTabs={['haskell', 'mercury', 'prolog']}>
<TabItem value="clojure" label="Clojure">

```clojure
;; Benötigt: core.matrix oder andere Bibliotheken
;; Beispiel mit symbolischen Ausdrücken
(def expr '(+ (* x 2) 3))
(def derivative (simplify (diff expr 'x)))
```

**Besonderheiten:**
- Externe Bibliotheken für symbolische Berechnungen erforderlich
- Clojure's Makro-System ermöglicht symbolische Manipulation

**Weiterführende Links:**
- [Clojure Documentation](https://clojure.org/reference/documentation)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Benötigt: Maxima oder andere Bibliotheken
;; Beispiel mit symbolischen Ausdrücken
(defvar expr '(+ (* x 2) 3))
(defvar derivative (simplify (diff expr 'x)))
```

**Besonderheiten:**
- Maxima ist ein Common Lisp-basiertes System für symbolische Mathematik
- Lisp's S-Expression-Syntax eignet sich gut für symbolische Manipulation

**Weiterführende Links:**
- [Maxima Documentation](https://maxima.sourceforge.io/documentation.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Benötigt: ad (für automatische Differentiation)
import Numeric.AD

f :: Num a => a -> a
f x = x^2 + 2*x + 3

-- Automatische Ableitung
f' :: Double -> Double
f' = diff f  -- f'(x) = 2*x + 2

result = f' 5.0  -- 12.0
```

**Besonderheiten:**
- Keine native symbolische Berechnung, aber Bibliotheken wie `ad` für automatische Differentiation
- Funktionale Programmierung eignet sich gut für symbolische Manipulation
- Weitere Bibliotheken: `sbv` für symbolische Ausführung, `simple-reflect` für symbolische Reflexion

**Weiterführende Links:**
- [Haskell ad package](https://hackage.haskell.org/package/ad)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Benötigt: Symbolics.jl
using Symbolics
@variables x
expr = x^2 + 2*x + 3
derivative = expand_derivatives(Differential(x)(expr))
```

**Besonderheiten:**
- Symbolics.jl Paket für symbolische Berechnungen
- Integriert gut mit Julia's numerischen Fähigkeiten

**Weiterführende Links:**
- [Symbolics.jl Documentation](https://symbolics.juliasymbolics.org/)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Symbolische Terme als algebraische Datentypen
:- type expr
    --->    num(float)
    ;       var(string)
    ;       add(expr, expr)
    ;       mul(expr, expr).

% Symbolische Ableitung
:- func derivative(expr, string) = expr.
derivative(num(_), _) = num(0.0).
derivative(var(V), X) =
    ( if V = X then num(1.0) else num(0.0) ).
derivative(add(U, V), X) =
    add(derivative(U, X), derivative(V, X)).
derivative(mul(U, V), X) =
    add(mul(derivative(U, X), V),
        mul(U, derivative(V, X))).

% derivative(mul(num(2.0), var("x")), "x")
% = add(mul(num(0.0), var("x")),
%        mul(num(2.0), num(1.0)))
```

**Besonderheiten:**
- Algebraische Datentypen als natürliche Darstellung symbolischer Ausdrücke
- Pattern Matching für Termumschreibung
- Typsichere symbolische Manipulation — Compiler prüft Vollständigkeit der Fallunterscheidungen
- Keine eingebaute CAS-Bibliothek — symbolische Vereinfachungen müssen manuell implementiert werden

**Weiterführende Links:**
- [Mercury Language Reference - Types](https://www.mercurylang.org/information/doc-release/mercury_ref/Types.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Benötigt: sympy
from sympy import symbols, diff, simplify
x = symbols('x')
expr = x**2 + 2*x + 3
derivative = diff(expr, x)
simplified = simplify(derivative)
```

**Besonderheiten:**
- SymPy-Bibliothek für symbolische Mathematik
- Umfangreiche Funktionalität für Algebra, Analysis und mehr

**Weiterführende Links:**
- [SymPy Documentation](https://docs.sympy.org/latest/index.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Symbolische Terme als native Datenstrukturen
% Prolog-Terme SIND symbolische Ausdrücke

% Symbolischer Ausdruck: 2*x + 3
Expr = add(mul(2, x), 3).

% Symbolische Ableitung
derivative(X, X, 1) :- !.               % d/dx x = 1
derivative(C, _, 0) :- number(C), !.    % d/dx c = 0
derivative(add(U, V), X, add(DU, DV)) :-
    derivative(U, X, DU),
    derivative(V, X, DV).
derivative(mul(C, U), X, mul(C, DU)) :-
    number(C), !,
    derivative(U, X, DU).
derivative(mul(U, V), X, add(mul(DU, V), mul(U, DV))) :-
    derivative(U, X, DU),
    derivative(V, X, DV).

% ?- derivative(add(mul(2, x), 3), x, D).
% D = add(mul(2, 1), 0).
```

**Besonderheiten:**
- Prolog-Terme sind von Natur aus symbolische Ausdrücke — keine spezielle Bibliothek für Grundoperationen nötig.
- Symbolische Manipulation erfolgt über Unifikation und Pattern-Matching auf Termen.
- Keine eingebaute CAS-Bibliothek (Computer Algebra System) — komplexere symbolische Vereinfachungen müssen manuell implementiert oder über externe Systeme eingebunden werden.
- Gut geeignet für regelbasierte Termumschreibung und symbolische Ableitungen.

**Weiterführende Links:**
- [SWI-Prolog Manual - Terms](https://www.swi-prolog.org/pldoc/man?section=manipterm)
- [SWI-Prolog Manual - Arithmetic](https://www.swi-prolog.org/pldoc/man?section=arith)

</TabItem>
<TabItem value="r" label="R">

```r
# Benötigt: Ryacas oder andere Bibliotheken
library(Ryacas)
x <- Sym("x")
expr <- x^2 + 2*x + 3
derivative <- deriv(expr, x)
```

**Besonderheiten:**
- Ryacas-Paket für symbolische Berechnungen
- Bindet Yacas (Yet Another Computer Algebra System)

**Weiterführende Links:**
- [Ryacas Documentation](https://cran.r-project.org/package=Ryacas)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Symbolische Ausdrücke als Listen (S-Expressions)
(define expr '(+ (* x 2) 3))

;; Einfache symbolische Manipulation
(define (substitute expr var val)
  (cond
    [(equal? expr var) val]
    [(list? expr) (map (lambda (e) (substitute e var val)) expr)]
    [else expr]))

(substitute expr 'x 5)  ; '(+ (* 5 2) 3)
```

**Besonderheiten:**
- Lisp-ähnliche Syntax eignet sich gut für symbolische Manipulation
- S-Expressions sind natürliche Darstellung für mathematische Ausdrücke
- Externe Bibliotheken für erweiterte symbolische Berechnungen

**Weiterführende Links:**
- [Racket Documentation - Math](https://docs.racket-lang.org/math/index.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Benötigt: symbolic oder andere Bibliotheken
# Beispiel mit symbolischen Ausdrücken
require 'symbolic'
x = var(:x)
expr = x**2 + 2*x + 3
derivative = expr.diff(x)
```

**Besonderheiten:**
- Externe Bibliotheken für symbolische Berechnungen erforderlich
- Ruby's Metaprogramming-Fähigkeiten können für symbolische Manipulation genutzt werden

**Weiterführende Links:**
- [Ruby symbolic gem](https://rubygems.org/gems/symbolic)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Symbolische Ausdrücke als Listen (Homoikonizität)
(define expr '(+ (* x 2) 3))

;; Manuelle symbolische Ableitung (Beispiel)
;; Benötigt: externe Bibliotheken für simplify/diff
;; (define derivative (simplify (diff expr 'x)))

;; Scheme-Syntax ermöglicht natürliche Darstellung symbolischer Ausdrücke
(define (eval-expr expr env)
  (cond
    ((number? expr) expr)
    ((symbol? expr) (cdr (assoc expr env)))
    ((list? expr) (apply (car expr) (map (lambda (e) (eval-expr e env)) (cdr expr))))))
```

**Besonderheiten:**
- Homoikonizität ermöglicht natürliche symbolische Manipulation
- Ausdrücke als Listen darstellbar und manipulierbar
- Erweiterte symbolische Berechnungen benötigen externe Bibliotheken

**Weiterführende Links:**
- [R7RS Scheme Specification](https://small.r7rs.org/attachment/r7rs.pdf)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Symbolische Berechnung *)
expr = x^2 + 2*x + 3;
derivative = D[expr, x]           (* 2 + 2*x *)
integral = Integrate[expr, x]     (* x^3/3 + x^2 + 3*x *)
simplified = Simplify[(x^2 - 1)/(x - 1)]  (* 1 + x *)
```

**Besonderheiten:**
- Native Unterstützung für symbolische Berechnungen
- Umfangreiche Funktionalität für Algebra, Analysis, Differentialgleichungen und mehr
- Integriert symbolische und numerische Berechnungen
- Undefinierte Bezeichner sind automatisch symbolisch

**Weiterführende Links:**
- [Wolfram Language Documentation - Symbolic Computation](https://reference.wolfram.com/language/guide/SymbolicComputation.html)

</TabItem>
</Tabs>


## 19.2.6. Format Statements

Deklarative Format-Spezifikationen für die Ein- und Ausgabe, die getrennt von den I/O-Statements definiert werden. Ermöglicht präzise Kontrolle über die Formatierung von Daten.

### Sprachen {#sprachen}

<Tabs availableTabs={['ada', 'fortran', 'python', 'r']}>
<TabItem value="ada" label="Ada">

```ada
-- Format-Spezifikation in Ada
Put_Line(Item => 123.456, Fore => 6, Aft => 2, Exp => 0);
-- Ausgabe: "123.46"
```

**Besonderheiten:**
- Formatierung über Parameter in I/O-Prozeduren
- `Fore`, `Aft`, `Exp` Parameter für Fließkommazahlen
- Keine separaten FORMAT-Statements wie in Fortran

**Weiterführende Links:**
- [Ada Reference Manual - Input-Output](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-A.html)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Format-Statement getrennt von I/O-Statement
100 FORMAT(I5, F8.2, A10)
WRITE(*, 100) 123, 45.67, 'Text'
! Ausgabe: "  123   45.67      Text"
```

**Besonderheiten:**
- Format-Statements werden getrennt von I/O-Statements definiert
- Format-Codes: `I` für Integer, `F` für Float, `A` für String
- Format-Statements können wiederverwendet werden

**Weiterführende Links:**
- [Fortran Wiki - Format Statements](https://fortranwiki.org/fortran/show/Format+statements)

</TabItem>
<TabItem value="python" label="Python">

```python
# Format-Spezifikation mit format() oder f-strings
value = 123.456
formatted = format(value, "8.2f")
# Ausgabe: "  123.46"
```

**Besonderheiten:**
- Format-Spezifikation als String-Literale
- `format()` Funktion oder f-strings (seit Python 3.6)
- Keine separaten Format-Statements wie in Fortran

**Weiterführende Links:**
- [Python Documentation - Format Specification Mini-Language](https://docs.python.org/3/library/string.html#formatspec)

</TabItem>
<TabItem value="r" label="R">

```r
# Format-Spezifikation mit sprintf() oder format()
value <- 123.456
formatted <- sprintf("%8.2f", value)
# Ausgabe: "  123.46"
```

**Besonderheiten:**
- Format-Spezifikation als String-Literale
- `sprintf()` oder `format()` Funktionen
- C-ähnliche Format-Spezifikationen

**Weiterführende Links:**
- [R Documentation - sprintf](https://stat.ethz.ch/R-manual/R-devel/library/base/html/sprintf.html)

</TabItem>
</Tabs>


## 19.2.7. Array Operations (Vektorisiert)

Vektorisierte Operationen auf Arrays, die elementweise auf alle Elemente angewendet werden, ohne explizite Schleifen. Ermöglicht effiziente Berechnungen auf großen Datenmengen.

### Sprachen {#sprachen}

<Tabs availableTabs={['csharp', 'cpp', 'fortran', 'julia', 'matlab', 'mojo', 'octave', 'r', 'rust', 'swift', 'wolfram-language']} orangeTabs={['c', 'go', 'java', 'javascript', 'kotlin', 'python', 'scala', 'typescript']}>
<TabItem value="c" label="C">

```c
// Benötigt: manuelle Vektorisierung oder SIMD-Intrinsics
// Beispiel mit SIMD (seit C11)
#include <immintrin.h>
__m256 a = _mm256_set_ps(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0);
__m256 b = _mm256_set_ps(2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0);
__m256 result = _mm256_add_ps(a, b);
```

**Besonderheiten:**
- Keine native Vektorisierung auf Sprachebene
- SIMD-Intrinsics für vektorisierte Operationen
- Compiler können automatisch vektorisieren

**Weiterführende Links:**
- [Intel Intrinsics Guide](https://www.intel.com/content/www/us/en/docs/intrinsics-guide/index.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Benötigt: System.Numerics
using System.Numerics;
var a = new Vector<float>(new float[] {1, 2, 3, 4, 5, 6, 7, 8});
var b = new Vector<float>(new float[] {2, 3, 4, 5, 6, 7, 8, 9});
var result = a + b;
```

**Besonderheiten:**
- `System.Numerics.Vector<T>` für SIMD-Operationen (seit .NET Core 2.0)
- Automatische Vektorisierung durch JIT-Compiler möglich

**Weiterführende Links:**
- [Microsoft .NET Documentation - Vector](https://learn.microsoft.com/en-us/dotnet/api/system.numerics.vector-1)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Benötigt: Eigen oder std::valarray
#include <valarray>
std::valarray<double> a = {1, 2, 3, 4};
std::valarray<double> b = {2, 3, 4, 5};
std::valarray<double> result = a + b;
```

**Besonderheiten:**
- `std::valarray` für vektorisierte Operationen
- Eigen-Bibliothek bietet umfangreiche vektorisierte Operationen
- Compiler können automatisch vektorisieren

**Weiterführende Links:**
- [cppreference.com - std::valarray](https://en.cppreference.com/w/cpp/numeric/valarray)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
real, dimension(4) :: a, b, result
a = [1.0, 2.0, 3.0, 4.0]
b = [2.0, 3.0, 4.0, 5.0]
result = a + b
```

**Besonderheiten:**
- Native Unterstützung für vektorisierte Array-Operationen (seit Fortran 90)
- Elementweise Operationen ohne explizite Schleifen
- Optimiert für numerische Berechnungen

**Weiterführende Links:**
- [Fortran Wiki - Array Operations](https://fortranwiki.org/fortran/show/Array+operations)

</TabItem>
<TabItem value="go" label="Go">

```go
// Benötigt: gonum.org/v1/gonum/mat
import "gonum.org/v1/gonum/mat"
a := mat.NewVecDense(4, []float64{1, 2, 3, 4})
b := mat.NewVecDense(4, []float64{2, 3, 4, 5})
var result mat.VecDense
result.AddVec(a, b)
```

**Besonderheiten:**
- Gonum-Bibliothek bietet vektorisierte Operationen
- Keine native Vektorisierung auf Sprachebene

**Weiterführende Links:**
- [Gonum Documentation](https://pkg.go.dev/gonum.org/v1/gonum/mat)

</TabItem>
<TabItem value="java" label="Java">

```java
// Benötigt: Apache Commons Math oder andere Bibliotheken
// Beispiel mit manueller Vektorisierung
double[] a = {1, 2, 3, 4};
double[] b = {2, 3, 4, 5};
double[] result = new double[4];
for (int i = 0; i < 4; i++) {
    result[i] = a[i] + b[i];
}
```

**Besonderheiten:**
- Keine native Vektorisierung auf Sprachebene
- JVM kann automatisch vektorisieren (Auto-Vectorization)
- Externe Bibliotheken für vektorisierte Operationen

**Weiterführende Links:**
- [Java Documentation - Arrays](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Arrays.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Benötigt: Typed Arrays für effiziente Operationen
const a = new Float64Array([1, 2, 3, 4]);
const b = new Float64Array([2, 3, 4, 5]);
const result = new Float64Array(4);
for (let i = 0; i < 4; i++) {
    result[i] = a[i] + b[i];
}
```

**Besonderheiten:**
- Typed Arrays für effiziente numerische Operationen
- Keine native Vektorisierung auf Sprachebene
- JavaScript-Engines können automatisch optimieren

**Weiterführende Links:**
- [MDN Web Docs - Typed Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
a = [1, 2, 3, 4]
b = [2, 3, 4, 5]
result = a + b
```

**Besonderheiten:**
- Native Unterstützung für vektorisierte Array-Operationen
- Elementweise Operationen ohne explizite Schleifen
- Optimiert für numerische Berechnungen

**Weiterführende Links:**
- [Julia Documentation - Array Operations](https://docs.julialang.org/en/v1/manual/arrays/#Elementwise-Operations)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Benötigt: manuelle Vektorisierung oder Bibliotheken
val a = doubleArrayOf(1.0, 2.0, 3.0, 4.0)
val b = doubleArrayOf(2.0, 3.0, 4.0, 5.0)
val result = DoubleArray(4) { i -> a[i] + b[i] }
```

**Besonderheiten:**
- Keine native Vektorisierung auf Sprachebene
- JVM kann automatisch vektorisieren
- Externe Bibliotheken für vektorisierte Operationen

**Weiterführende Links:**
- [Kotlin Documentation - Arrays](https://kotlinlang.org/docs/arrays.html)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
a = [1, 2, 3, 4];
b = [2, 3, 4, 5];
result = a + b;
```

**Besonderheiten:**
- Native Unterstützung für vektorisierte Array-Operationen
- Elementweise Operationen ohne explizite Schleifen
- Optimiert für numerische Berechnungen

**Weiterführende Links:**
- [MATLAB Documentation - Vectorization](https://www.mathworks.com/help/matlab/matlab_prog/vectorization.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Benötigt: numpy
from numpy import array
a = array([1, 2, 3, 4])
b = array([2, 3, 4, 5])
result = a + b
```

**Besonderheiten:**
- Verwendet NumPy-ähnliche Syntax
- Unterstützt vektorisierte Operationen über NumPy

**Weiterführende Links:**
- [Mojo Documentation](https://docs.modular.com/mojo/)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
a = [1, 2, 3, 4];
b = [2, 3, 4, 5];
result = a + b;
```

**Besonderheiten:**
- MATLAB-kompatible Syntax
- Native Unterstützung für vektorisierte Array-Operationen
- Elementweise Operationen ohne explizite Schleifen

**Weiterführende Links:**
- [GNU Octave Documentation - Vectorization](https://octave.org/doc/v8.1.0/Vectorization-and-Faster-Code-Execution.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Benötigt: import numpy as np
import numpy as np
a = np.array([1, 2, 3, 4])
b = np.array([2, 3, 4, 5])
result = a + b
```

**Besonderheiten:**
- NumPy bietet vektorisierte Array-Operationen
- Elementweise Operationen ohne explizite Schleifen
- Sehr effizient für numerische Berechnungen

**Weiterführende Links:**
- [NumPy Documentation - Array Operations](https://numpy.org/doc/stable/reference/routines.array-manipulation.html)

</TabItem>
<TabItem value="r" label="R">

```r
a <- c(1, 2, 3, 4)
b <- c(2, 3, 4, 5)
result <- a + b
```

**Besonderheiten:**
- Native Unterstützung für vektorisierte Operationen
- Elementweise Operationen ohne explizite Schleifen
- Optimiert für numerische und statistische Berechnungen

**Weiterführende Links:**
- [R Documentation - Vectorization](https://stat.ethz.ch/R-manual/R-devel/library/base/html/Vectorize.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Benötigt: ndarray = "0.15"
use ndarray::prelude::*;
let a = array![1., 2., 3., 4.];
let b = array![2., 3., 4., 5.];
let result = &a + &b;
```

**Besonderheiten:**
- ndarray-Bibliothek bietet vektorisierte Operationen
- Typ-sichere Operationen zur Compile-Zeit

**Weiterführende Links:**
- [ndarray Documentation](https://docs.rs/ndarray/latest/ndarray/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Benötigt: manuelle Vektorisierung oder Bibliotheken
val a = Array(1.0, 2.0, 3.0, 4.0)
val b = Array(2.0, 3.0, 4.0, 5.0)
val result = a.zip(b).map { case (x, y) => x + y }
```

**Besonderheiten:**
- Keine native Vektorisierung auf Sprachebene
- JVM kann automatisch vektorisieren
- Funktionale Operationen für Array-Manipulation

**Weiterführende Links:**
- [Scala Documentation - Arrays](https://docs.scala-lang.org/overviews/collections-2.13/arrays.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Benötigt: Accelerate framework für SIMD
import Accelerate
let a: [Float] = [1, 2, 3, 4]
let b: [Float] = [2, 3, 4, 5]
var result = [Float](repeating: 0, count: 4)
vDSP_vadd(a, 1, b, 1, &result, 1, vDSP_Length(4))
```

**Besonderheiten:**
- Accelerate Framework für vektorisierte Operationen
- SIMD-Unterstützung für effiziente Berechnungen

**Weiterführende Links:**
- [Apple Documentation - Accelerate](https://developer.apple.com/documentation/accelerate)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Benötigt: Typed Arrays für effiziente Operationen
const a = new Float64Array([1, 2, 3, 4]);
const b = new Float64Array([2, 3, 4, 5]);
const result = new Float64Array(4);
for (let i = 0; i < 4; i++) {
    result[i] = a[i] + b[i];
}
```

**Besonderheiten:**
- Typed Arrays für effiziente numerische Operationen
- Keine native Vektorisierung auf Sprachebene
- JavaScript-Engines können automatisch optimieren

**Weiterführende Links:**
- [MDN Web Docs - Typed Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
a = {1, 2, 3, 4};
b = {2, 3, 4, 5};
result = a + b
```

**Besonderheiten:**
- Native Unterstützung für vektorisierte Operationen
- Elementweise Operationen ohne explizite Schleifen
- Unterstützt symbolische Berechnungen

**Weiterführende Links:**
- [Wolfram Language Documentation - List Operations](https://reference.wolfram.com/language/guide/ListOperations.html)

</TabItem>
</Tabs>


## 19.2.8. Array Slicing (Fortran-style)

Array-Slicing mit Start- und End-Index sowie optionaler Schrittweite in einer kompakten Syntax. Unterstützt negative Indizes für rückwärts-Zählung und ermöglicht präzise Kontrolle über Array-Ausschnitte.

### Sprachen {#sprachen}

<Tabs availableTabs={['fortran', 'julia', 'matlab', 'octave', 'python', 'r', 'wolfram-language']}>
<TabItem value="fortran" label="Fortran">

```fortran
integer, dimension(10) :: arr
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
slice = arr(2:8:2)  ! Elemente 2, 4, 6, 8
! Syntax: arr(start:end:step)
```

**Besonderheiten:**
- Syntax: `arr(start:end:step)`
- Start- und End-Index sind inklusiv
- Schrittweite optional (Standard: 1)
- Negative Indizes nicht unterstützt

**Weiterführende Links:**
- [Fortran Wiki - Array Slicing](https://fortranwiki.org/fortran/show/Array+slicing)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
slice = arr[2:2:8]  # Elemente 2, 4, 6, 8
# Syntax: arr[start:step:end]
```

**Besonderheiten:**
- Syntax: `arr[start:step:end]`
- Start- und End-Index sind inklusiv
- Schrittweite optional (Standard: 1)
- Unterstützt negative Indizes für rückwärts-Zählung

**Weiterführende Links:**
- [Julia Documentation - Array Indexing](https://docs.julialang.org/en/v1/manual/arrays/#man-array-indexing)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
slice = arr(2:2:8);  % Elemente 2, 4, 6, 8
% Syntax: arr(start:step:end)
```

**Besonderheiten:**
- Syntax: `arr(start:step:end)`
- Start- und End-Index sind inklusiv
- Schrittweite optional (Standard: 1)
- Unterstützt negative Indizes für rückwärts-Zählung mit `end`

**Weiterführende Links:**
- [MATLAB Documentation - Array Indexing](https://www.mathworks.com/help/matlab/math/array-indexing.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
slice = arr(2:2:8);  % Elemente 2, 4, 6, 8
% Syntax: arr(start:step:end)
```

**Besonderheiten:**
- MATLAB-kompatible Syntax
- Syntax: `arr(start:step:end)`
- Start- und End-Index sind inklusiv
- Schrittweite optional (Standard: 1)

**Weiterführende Links:**
- [GNU Octave Documentation - Index Expressions](https://octave.org/doc/v8.1.0/Index-Expressions.html)

</TabItem>
<TabItem value="python" label="Python">

```python
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
slice = arr[1:8:2]  # Elemente 2, 4, 6, 8
# Syntax: arr[start:end:step]
```

**Besonderheiten:**
- Syntax: `arr[start:end:step]`
- Start-Index ist inklusiv, End-Index ist exklusiv
- Schrittweite optional (Standard: 1)
- Unterstützt negative Indizes für rückwärts-Zählung

**Weiterführende Links:**
- [Python Documentation - Sequence Types](https://docs.python.org/3/library/stdtypes.html#sequence-types-list-tuple-range)

</TabItem>
<TabItem value="r" label="R">

```r
arr <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
slice <- arr[seq(2, 8, by = 2)]  # Elemente 2, 4, 6, 8
# Syntax: arr[seq(start, end, by = step)]
```

**Besonderheiten:**
- Verwendet `seq()` Funktion für Schrittweite
- Syntax: `arr[seq(start, end, by = step)]`
- Start- und End-Index sind inklusiv
- Unterstützt negative Indizes

**Weiterführende Links:**
- [R Documentation - Indexing](https://stat.ethz.ch/R-manual/R-devel/library/base/html/Extract.html)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Array Slicing *)
matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
row = matrix[[2]]             (* {4, 5, 6} *)
col = matrix[[All, 2]]        (* {2, 5, 8} *)
sub = matrix[[1 ;; 2, 2 ;; 3]]  (* {{2, 3}, {5, 6}} *)
```

**Besonderheiten:**
- `All` für alle Elemente einer Dimension
- `;;` (Span) für Bereichsauswahl
- Mehrdimensionales Slicing nativ unterstützt

**Weiterführende Links:**
- [Wolfram Language Documentation - Part](https://reference.wolfram.com/language/ref/Part.html)

</TabItem>
</Tabs>


## 19.2.9. Column-major Order

Speicherung von mehrdimensionalen Arrays spaltenweise im Speicher. Die Elemente werden zuerst entlang der ersten Dimension (Spalten) gespeichert, dann entlang der zweiten Dimension (Zeilen). Dies ist das Gegenteil von Row-major Order.

### Sprachen {#sprachen}

<Tabs availableTabs={['fortran', 'julia', 'matlab', 'octave', 'r']}>
<TabItem value="fortran" label="Fortran">

```fortran
integer, dimension(3, 3) :: matrix
matrix = reshape([1, 2, 3, 4, 5, 6, 7, 8, 9], [3, 3])
! Speicherung: 1, 2, 3, 4, 5, 6, 7, 8, 9
! Matrix:
! 1  4  7
! 2  5  8
! 3  6  9
```

**Besonderheiten:**
- Column-major Order ist Standard in Fortran
- Optimiert für spaltenweise Zugriffe
- Wichtig für Performance bei numerischen Berechnungen

**Weiterführende Links:**
- [Fortran Wiki - Array Storage](https://fortranwiki.org/fortran/show/Array+storage)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
matrix = reshape([1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 3)
# Speicherung: 1, 2, 3, 4, 5, 6, 7, 8, 9
# Matrix:
# 1  4  7
# 2  5  8
# 3  6  9
```

**Besonderheiten:**
- Column-major Order ist Standard in Julia
- Optimiert für spaltenweise Zugriffe
- Wichtig für Performance bei numerischen Berechnungen

**Weiterführende Links:**
- [Julia Documentation - Multi-dimensional Arrays](https://docs.julialang.org/en/v1/manual/arrays/#Multi-dimensional-Arrays)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
matrix = reshape([1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 3);
% Speicherung: 1, 2, 3, 4, 5, 6, 7, 8, 9
% Matrix:
% 1  4  7
% 2  5  8
% 3  6  9
```

**Besonderheiten:**
- Column-major Order ist Standard in MATLAB
- Optimiert für spaltenweise Zugriffe
- Wichtig für Performance bei numerischen Berechnungen

**Weiterführende Links:**
- [MATLAB Documentation - Matrix Indexing](https://www.mathworks.com/help/matlab/math/matrix-indexing.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
matrix = reshape([1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 3);
% Speicherung: 1, 2, 3, 4, 5, 6, 7, 8, 9
% Matrix:
% 1  4  7
% 2  5  8
% 3  6  9
```

**Besonderheiten:**
- MATLAB-kompatible Syntax
- Column-major Order ist Standard in Octave
- Optimiert für spaltenweise Zugriffe

**Weiterführende Links:**
- [GNU Octave Documentation - Matrices](https://octave.org/doc/v8.1.0/Matrices.html)

</TabItem>
<TabItem value="r" label="R">

```r
matrix <- matrix(c(1, 2, 3, 4, 5, 6, 7, 8, 9), nrow = 3, ncol = 3, byrow = FALSE)
# Speicherung: 1, 2, 3, 4, 5, 6, 7, 8, 9
# Matrix:
# 1  4  7
# 2  5  8
# 3  6  9
```

**Besonderheiten:**
- Column-major Order ist Standard in R
- `byrow = FALSE` für Column-major Order (Standard)
- Optimiert für spaltenweise Zugriffe

**Weiterführende Links:**
- [R Documentation - matrix](https://stat.ethz.ch/R-manual/R-devel/library/base/html/matrix.html)

</TabItem>
</Tabs>

## 19.2.10. SIMD-Support

Explizite Nutzung von SIMD-Instruktionen (Single Instruction, Multiple Data) für parallele Datenverarbeitung auf Hardware-Ebene. Ermöglicht die gleichzeitige Verarbeitung mehrerer Datenwerte in einem einzigen Prozessor-Befehl.

### Sprachen {#sprachen}

<Tabs availableTabs={['c', 'csharp', 'cpp', 'd', 'mojo', 'odin', 'rust', 'swift', 'zig']} yellowTabs={['fortran', 'java', 'julia', 'nim']} orangeTabs={['go']}>
<TabItem value="c" label="C">

```c
// Benötigt: #include <xmmintrin.h> (SSE)
__m128 a = _mm_set_ps(4.0f, 3.0f, 2.0f, 1.0f);
__m128 b = _mm_set_ps(8.0f, 7.0f, 6.0f, 5.0f);
__m128 result = _mm_add_ps(a, b);
// result = {6.0, 8.0, 10.0, 12.0}
```

**Besonderheiten:**
- SIMD über plattformspezifische Intrinsics (`_mm_`-Präfix für SSE, `_mm256_` für AVX)
- Header: `<xmmintrin.h>` (SSE), `<immintrin.h>` (AVX), `<arm_neon.h>` (NEON)
- Compiler können mit `-O2`/`-O3` automatisch vektorisieren

**Weiterführende Links:**
- [Intel Intrinsics Guide](https://www.intel.com/content/www/us/en/docs/intrinsics-guide/index.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// System.Runtime.Intrinsics (seit .NET Core 3.0)
var a = Vector128.Create(1.0f, 2.0f, 3.0f, 4.0f);
var b = Vector128.Create(5.0f, 6.0f, 7.0f, 8.0f);
var result = Sse.Add(a, b);
// result = {6.0, 8.0, 10.0, 12.0}
```

**Besonderheiten:**
- `System.Runtime.Intrinsics` für plattformspezifische SIMD-Operationen (seit .NET Core 3.0)
- `Vector128<T>` und `Vector256<T>` als SIMD-Typen
- Plattformprüfung über `Sse.IsSupported`, `Avx.IsSupported` etc.

**Weiterführende Links:**
- [Microsoft .NET Documentation - Hardware Intrinsics](https://learn.microsoft.com/en-us/dotnet/api/system.runtime.intrinsics)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Benötigt: #include <xmmintrin.h> (SSE)
__m128 a = _mm_set_ps(4.0f, 3.0f, 2.0f, 1.0f);
__m128 b = _mm_set_ps(8.0f, 7.0f, 6.0f, 5.0f);
__m128 result = _mm_add_ps(a, b);
// result = {6.0, 8.0, 10.0, 12.0}
```

**Besonderheiten:**
- Gleiche Intrinsics wie C (`_mm_*` für SSE, `_mm256_*` für AVX)
- `std::experimental::simd` als portabler SIMD-Wrapper (P0214, für C++26 geplant)
- Compiler können mit `-O2`/`-O3` automatisch vektorisieren

**Weiterführende Links:**
- [cppreference.com - SIMD Library](https://en.cppreference.com/w/cpp/experimental/simd)

</TabItem>
<TabItem value="d" label="D">

```d
// Benötigt: import core.simd;
float4 a = [1.0f, 2.0f, 3.0f, 4.0f];
float4 b = [5.0f, 6.0f, 7.0f, 8.0f];
float4 result = a + b;
// result = [6.0, 8.0, 10.0, 12.0]
```

**Besonderheiten:**
- `core.simd` bietet native SIMD-Typen (`float4`, `double2`, `int4` etc.)
- Operator-Überladung für elementweise Operationen
- Automatische Nutzung der besten verfügbaren SIMD-Instruktionen

**Weiterführende Links:**
- [D Documentation - core.simd](https://dlang.org/phobos/core_simd.html)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! OpenMP SIMD-Direktive für explizite Vektorisierung
real :: a(4) = [1.0, 2.0, 3.0, 4.0]
real :: b(4) = [5.0, 6.0, 7.0, 8.0]
real :: result(4)
integer :: i

!$OMP SIMD
do i = 1, 4
    result(i) = a(i) + b(i)
end do
! result = [6.0, 8.0, 10.0, 12.0]
```

**Besonderheiten:**
- OpenMP SIMD-Direktiven (`!$OMP SIMD`) für explizite Vektorisierung (seit OpenMP 4.0)
- Keine direkten SIMD-Typen auf Sprachebene
- Compiler-Auto-Vektorisierung oft ausreichend für numerische Schleifen

**Weiterführende Links:**
- [OpenMP SIMD Constructs](https://www.openmp.org/spec-html/5.2/openmpch6.html)

</TabItem>
<TabItem value="go" label="Go">

```go
// Keine native SIMD-Unterstützung auf Sprachebene
// SIMD nur über Assembly-Dateien oder unsafe möglich
a := [4]float32{1.0, 2.0, 3.0, 4.0}
b := [4]float32{5.0, 6.0, 7.0, 8.0}
var result [4]float32
for i := 0; i < 4; i++ {
    result[i] = a[i] + b[i]
}
// Compiler kann einfache Schleifen automatisch vektorisieren
```

**Besonderheiten:**
- Keine SIMD-Intrinsics oder SIMD-Typen auf Sprachebene
- SIMD nur über Go-Assembly-Dateien oder `unsafe`-Package möglich
- Compiler-Auto-Vektorisierung für einfache Schleifen

**Weiterführende Links:**
- [Go Documentation - Assembly](https://go.dev/doc/asm)

</TabItem>
<TabItem value="java" label="Java">

```java
// Vector API (Incubator seit JDK 16)
// Benötigt: --add-modules jdk.incubator.vector
var species = FloatVector.SPECIES_128;
var a = FloatVector.fromArray(species, new float[]{1.0f, 2.0f, 3.0f, 4.0f}, 0);
var b = FloatVector.fromArray(species, new float[]{5.0f, 6.0f, 7.0f, 8.0f}, 0);
var result = a.add(b);
// result = {6.0, 8.0, 10.0, 12.0}
```

**Besonderheiten:**
- Vector API als Incubator-Modul (JEP 338, seit JDK 16)
- Plattformunabhängige API mit automatischer Nutzung der besten SIMD-Instruktionen
- `FloatVector.SPECIES_128` für 128-Bit, `SPECIES_256` für 256-Bit

**Weiterführende Links:**
- [JDK Vector API (JEP 338)](https://openjdk.org/jeps/338)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# @simd-Makro für Compiler-Vektorisierung
a = Float32[1.0, 2.0, 3.0, 4.0]
b = Float32[5.0, 6.0, 7.0, 8.0]
result = similar(a)

@simd for i in eachindex(a)
    result[i] = a[i] + b[i]
end
# result = [6.0, 8.0, 10.0, 12.0]
```

**Besonderheiten:**
- `@simd`-Makro signalisiert dem Compiler explizit Vektorisierung
- SIMD.jl-Paket für low-level SIMD-Typen
- `@inbounds @simd` für maximale Performance

**Weiterführende Links:**
- [Julia Documentation - Performance Tips (SIMD)](https://docs.julialang.org/en/v1/manual/performance-tips/#man-performance-annotations)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Native SIMD-Typen
var a = SIMD[DType.float32, 4](1.0, 2.0, 3.0, 4.0)
var b = SIMD[DType.float32, 4](5.0, 6.0, 7.0, 8.0)
var result = a + b
# result = [6.0, 8.0, 10.0, 12.0]
```

**Besonderheiten:**
- `SIMD[DType, size]` als nativer Typ im Sprachkern
- Unterstützt beliebige Vektorbreiten
- Operator-Überladung für elementweise Operationen

**Weiterführende Links:**
- [Mojo Documentation - SIMD](https://docs.modular.com/mojo/stdlib/builtin/simd/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Benötigt: nimsimd
var a = mm_setr_ps(1.0, 2.0, 3.0, 4.0)
var b = mm_setr_ps(5.0, 6.0, 7.0, 8.0)
var result = mm_add_ps(a, b)
# result = {6.0, 8.0, 10.0, 12.0}
```

**Besonderheiten:**
- nimsimd-Paket bietet Wrapper um SSE-, AVX- und NEON-Intrinsics
- Alternativ: direkte C-Intrinsics über `{.importc.}`-Pragma
- Compiler kann automatisch vektorisieren

**Weiterführende Links:**
- [nimsimd Documentation](https://github.com/guzba/nimsimd)

</TabItem>
<TabItem value="odin" label="Odin">

```c
// Native SIMD-Typen
a: #simd[4]f32 = {1.0, 2.0, 3.0, 4.0}
b: #simd[4]f32 = {5.0, 6.0, 7.0, 8.0}
result := a + b
// result = {6.0, 8.0, 10.0, 12.0}
```

**Besonderheiten:**
- `#simd[N]T`-Syntax für native SIMD-Vektoren
- Operator-Überladung für elementweise Operationen
- Unterstützt verschiedene Vektorbreiten und Elementtypen

**Weiterführende Links:**
- [Odin Documentation - SIMD](https://odin-lang.org/docs/overview/#simd)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Benötigt: use std::arch::x86_64::*;
unsafe {
    let a = _mm_set_ps(4.0, 3.0, 2.0, 1.0);
    let b = _mm_set_ps(8.0, 7.0, 6.0, 5.0);
    let result = _mm_add_ps(a, b);
    // result = {6.0, 8.0, 10.0, 12.0}
}
```

**Besonderheiten:**
- `std::arch`-Modul für stabile plattformspezifische Intrinsics
- SIMD-Operationen erfordern `unsafe`-Block
- Portable SIMD API (`std::simd`) als experimentelles Feature (nightly)
- Feature-Detection mit `is_x86_feature_detected!("sse")`

**Weiterführende Links:**
- [Rust Documentation - std::arch](https://doc.rust-lang.org/std/arch/index.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
let a = SIMD4<Float>(1.0, 2.0, 3.0, 4.0)
let b = SIMD4<Float>(5.0, 6.0, 7.0, 8.0)
let result = a + b
// result = SIMD4<Float>(6.0, 8.0, 10.0, 12.0)
```

**Besonderheiten:**
- Native SIMD-Typen: `SIMD2`, `SIMD4`, `SIMD8`, `SIMD16`, `SIMD32`, `SIMD64`
- Generisch über Elementtyp (`SIMD4<Float>`, `SIMD4<Int32>` etc.)
- Operator-Überladung für elementweise Operationen

**Weiterführende Links:**
- [Apple Documentation - SIMD](https://developer.apple.com/documentation/swift/simd)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
const a: @Vector(4, f32) = .{ 1.0, 2.0, 3.0, 4.0 };
const b: @Vector(4, f32) = .{ 5.0, 6.0, 7.0, 8.0 };
const result = a + b;
// result = { 6.0, 8.0, 10.0, 12.0 }
```

**Besonderheiten:**
- `@Vector(N, T)` als nativer SIMD-Typ
- Operator-Überladung für elementweise Operationen
- Compile-Zeit-Evaluation von SIMD-Operationen möglich

**Weiterführende Links:**
- [Zig Documentation - Vectors](https://ziglang.org/documentation/master/#Vectors)

</TabItem>
</Tabs>

