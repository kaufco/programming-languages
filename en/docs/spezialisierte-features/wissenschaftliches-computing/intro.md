---
slug: /spezialisierte-features/wissenschaftliches-computing
title: 19.2. Scientific Computing
toc_min_heading_level: 2
toc_max_heading_level: 2
---

import Tabs from '@site/src/components/FilteredTabs';
import TabItem from '@theme/TabItem';

# 19.2. Scientific Computing

Numerical features, matrix operations, symbolic computation.

## 19.2.1. Matrix Operations

Operations on matrices such as multiplication, addition, transposition, and inversion. Supports both element-wise and mathematical matrix operations.

### Languages {#sprachen}

<Tabs availableTabs={['csharp', 'cpp', 'fortran', 'go', 'java', 'julia', 'matlab', 'mojo', 'octave', 'python', 'r', 'rust', 'wolfram-language']}>
<TabItem value="csharp" label="C#">

```csharp
// Required: using System.Numerics;
var matrix1 = new Matrix4x4(
    1, 2, 3, 4,
    5, 6, 7, 8,
    9, 10, 11, 12,
    13, 14, 15, 16
);
var matrix2 = Matrix4x4.Identity;
var result = Matrix4x4.Multiply(matrix1, matrix2);
```

**Special features:**
- `System.Numerics.Matrix4x4` for 4x4 matrices (since .NET Framework 4.5)
- External libraries like Math.NET are required for general matrices

**Further reading:**
- [Microsoft .NET Documentation - Matrix4x4](https://learn.microsoft.com/en-us/dotnet/api/system.numerics.matrix4x4)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Required: #include <Eigen/Dense>
Eigen::MatrixXd matrix1(2, 2);
matrix1 << 1, 2,
           3, 4;
Eigen::MatrixXd matrix2(2, 2);
matrix2 << 5, 6,
           7, 8;
Eigen::MatrixXd result = matrix1 * matrix2;
```

**Special features:**
- Eigen library provides extensive matrix operations
- Supports both static and dynamic matrices
- Optimized for numerical computations

**Further reading:**
- [Eigen Documentation](https://eigen.tuxfamily.org/dox/)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
real, dimension(2, 2) :: matrix1, matrix2, result
matrix1 = reshape([1.0, 3.0, 2.0, 4.0], [2, 2])
matrix2 = reshape([5.0, 7.0, 6.0, 8.0], [2, 2])
result = matmul(matrix1, matrix2)
```

**Special features:**
- `matmul()` for matrix multiplication (since Fortran 90)
- Native support for multidimensional arrays
- Optimized for numerical computations

**Further reading:**
- [Fortran Wiki - Matrix Operations](https://fortranwiki.org/fortran/show/Matrix+operations)

</TabItem>
<TabItem value="go" label="Go">

```go
// Required: gonum.org/v1/gonum/mat
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

**Special features:**
- Gonum library provides matrix operations
- Matrices are immutable with respect to dimensions

**Further reading:**
- [Gonum Documentation](https://pkg.go.dev/gonum.org/v1/gonum/mat)

</TabItem>
<TabItem value="java" label="Java">

```java
// Required: org.apache.commons.math3.linear
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

**Special features:**
- Apache Commons Math provides extensive matrix operations
- Supports various matrix implementations

**Further reading:**
- [Apache Commons Math Documentation](https://commons.apache.org/proper/commons-math/userguide/linear.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
matrix1 = [1 2; 3 4]
matrix2 = [5 6; 7 8]
result = matrix1 * matrix2
```

**Special features:**
- Native matrix support without external libraries
- `*` performs matrix multiplication, `.*` element-wise multiplication
- Optimized for numerical computations

**Further reading:**
- [Julia Documentation - Arrays](https://docs.julialang.org/en/v1/manual/arrays/)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
matrix1 = [1, 2; 3, 4];
matrix2 = [5, 6; 7, 8];
result = matrix1 * matrix2;
```

**Special features:**
- Native matrix support as a core feature
- `*` performs matrix multiplication, `.*` element-wise multiplication
- Optimized for numerical computations

**Further reading:**
- [MATLAB Documentation - Matrix Operations](https://www.mathworks.com/help/matlab/matlab_prog/matrix-operations.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Required: numpy
from numpy import array, dot
matrix1 = array([[1, 2], [3, 4]])
matrix2 = array([[5, 6], [7, 8]])
result = dot(matrix1, matrix2)
```

**Special features:**
- Uses NumPy-like syntax
- Supports matrix operations via NumPy

**Further reading:**
- [Mojo Documentation](https://docs.modular.com/mojo/)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
matrix1 = [1, 2; 3, 4];
matrix2 = [5, 6; 7, 8];
result = matrix1 * matrix2;
```

**Special features:**
- MATLAB-compatible syntax
- Native matrix support
- `*` performs matrix multiplication, `.*` element-wise multiplication

**Further reading:**
- [GNU Octave Documentation - Matrices](https://octave.org/doc/v8.1.0/Matrices.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Required: import numpy as np
matrix1 = np.array([[1, 2], [3, 4]])
matrix2 = np.array([[5, 6], [7, 8]])
result = np.dot(matrix1, matrix2)
```

**Special features:**
- NumPy provides extensive matrix operations
- `np.dot()` for matrix multiplication, `@` operator (since Python 3.5)
- `*` performs element-wise multiplication

**Further reading:**
- [NumPy Documentation - Matrix Operations](https://numpy.org/doc/stable/reference/routines.linalg.html)

</TabItem>
<TabItem value="r" label="R">

```r
matrix1 <- matrix(c(1, 3, 2, 4), nrow = 2, ncol = 2)
matrix2 <- matrix(c(5, 7, 6, 8), nrow = 2, ncol = 2)
result <- matrix1 %*% matrix2
```

**Special features:**
- `%*%` for matrix multiplication
- `*` performs element-wise multiplication
- Native matrix support

**Further reading:**
- [R Documentation - Matrix Operations](https://stat.ethz.ch/R-manual/R-devel/library/base/html/matmult.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Required: ndarray = "0.15"
use ndarray::prelude::*;
let matrix1 = array![[1., 2.], [3., 4.]];
let matrix2 = array![[5., 6.], [7., 8.]];
let result = matrix1.dot(&matrix2);
```

**Special features:**
- ndarray library provides matrix operations
- Type-safe matrix operations at compile time

**Further reading:**
- [ndarray Documentation](https://docs.rs/ndarray/latest/ndarray/)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
matrix1 = {{1, 2}, {3, 4}};
matrix2 = {{5, 6}, {7, 8}};
result = matrix1 . matrix2
```

**Special features:**
- `.` for matrix multiplication
- `*` performs element-wise multiplication
- Native matrix support with symbolic computations

**Further reading:**
- [Wolfram Language Documentation - Matrix Operations](https://reference.wolfram.com/language/guide/MatrixOperations.html)

</TabItem>
</Tabs>


## 19.2.2. Vector Operations

Operations on vectors such as addition, dot product, cross product, and norm calculation. Supports both element-wise and mathematical vector operations.

### Languages {#sprachen}

<Tabs availableTabs={['csharp', 'cpp', 'fortran', 'go', 'java', 'julia', 'matlab', 'mojo', 'octave', 'python', 'r', 'rust', 'wolfram-language']}>
<TabItem value="csharp" label="C#">

```csharp
// Required: using System.Numerics;
var vector1 = new Vector3(1, 2, 3);
var vector2 = new Vector3(4, 5, 6);
var sum = Vector3.Add(vector1, vector2);
var dotProduct = Vector3.Dot(vector1, vector2);
var crossProduct = Vector3.Cross(vector1, vector2);
```

**Special features:**
- `System.Numerics.Vector3` for 3D vectors (since .NET Framework 4.5)
- External libraries like Math.NET are required for general vectors

**Further reading:**
- [Microsoft .NET Documentation - Vector3](https://learn.microsoft.com/en-us/dotnet/api/system.numerics.vector3)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Required: #include <Eigen/Dense>
Eigen::VectorXd vector1(3);
vector1 << 1, 2, 3;
Eigen::VectorXd vector2(3);
vector2 << 4, 5, 6;
Eigen::VectorXd sum = vector1 + vector2;
double dotProduct = vector1.dot(vector2);
```

**Special features:**
- Eigen library provides extensive vector operations
- Supports both static and dynamic vectors
- Optimized for numerical computations

**Further reading:**
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

**Special features:**
- `dot_product()` for dot product (since Fortran 90)
- Native support for vector operations
- Optimized for numerical computations

**Further reading:**
- [Fortran Wiki - Vector Operations](https://fortranwiki.org/fortran/show/Vector+operations)

</TabItem>
<TabItem value="go" label="Go">

```go
// Required: gonum.org/v1/gonum/mat
vector1 := mat.NewVecDense(3, []float64{1, 2, 3})
vector2 := mat.NewVecDense(3, []float64{4, 5, 6})
var sum mat.VecDense
sum.AddVec(vector1, vector2)
dotProduct := mat.Dot(vector1, vector2)
```

**Special features:**
- Gonum library provides vector operations
- Vectors are immutable with respect to dimensions

**Further reading:**
- [Gonum Documentation](https://pkg.go.dev/gonum.org/v1/gonum/mat)

</TabItem>
<TabItem value="java" label="Java">

```java
// Required: org.apache.commons.math3.linear
RealVector vector1 = new ArrayRealVector(new double[] {1, 2, 3});
RealVector vector2 = new ArrayRealVector(new double[] {4, 5, 6});
RealVector sum = vector1.add(vector2);
double dotProduct = vector1.dotProduct(vector2);
```

**Special features:**
- Apache Commons Math provides extensive vector operations
- Supports various vector implementations

**Further reading:**
- [Apache Commons Math Documentation](https://commons.apache.org/proper/commons-math/userguide/linear.html)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
vector1 = [1, 2, 3]
vector2 = [4, 5, 6]
sum_vec = vector1 + vector2
dotProduct = dot(vector1, vector2)
```

**Special features:**
- Native vector support without external libraries
- `dot()` for dot product
- Optimized for numerical computations

**Further reading:**
- [Julia Documentation - Arrays](https://docs.julialang.org/en/v1/manual/arrays/)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
vector1 = [1, 2, 3];
vector2 = [4, 5, 6];
sum_vec = vector1 + vector2;
dotProduct = dot(vector1, vector2);
```

**Special features:**
- Native vector support as a core feature
- `dot()` for dot product
- Optimized for numerical computations

**Further reading:**
- [MATLAB Documentation - Vector Operations](https://www.mathworks.com/help/matlab/math/vector-and-matrix-operations.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Required: numpy
from numpy import array, dot
vector1 = array([1, 2, 3])
vector2 = array([4, 5, 6])
sum_vec = vector1 + vector2
dotProduct = dot(vector1, vector2)
```

**Special features:**
- Uses NumPy-like syntax
- Supports vector operations via NumPy

**Further reading:**
- [Mojo Documentation](https://docs.modular.com/mojo/)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
vector1 = [1, 2, 3];
vector2 = [4, 5, 6];
sum_vec = vector1 + vector2;
dotProduct = dot(vector1, vector2);
```

**Special features:**
- MATLAB-compatible syntax
- Native vector support
- `dot()` for dot product

**Further reading:**
- [GNU Octave Documentation - Vectors](https://octave.org/doc/v8.1.0/Vectors-and-Matrices.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Required: import numpy as np
vector1 = np.array([1, 2, 3])
vector2 = np.array([4, 5, 6])
sum_vec = vector1 + vector2
dotProduct = np.dot(vector1, vector2)
```

**Special features:**
- NumPy provides extensive vector operations
- `np.dot()` for dot product
- `*` performs element-wise multiplication

**Further reading:**
- [NumPy Documentation - Vector Operations](https://numpy.org/doc/stable/reference/routines.linalg.html)

</TabItem>
<TabItem value="r" label="R">

```r
vector1 <- c(1, 2, 3)
vector2 <- c(4, 5, 6)
sum_vec <- vector1 + vector2
dotProduct <- sum(vector1 * vector2)
```

**Special features:**
- `c()` for vector creation
- `sum(vector1 * vector2)` for dot product
- Native vector support

**Further reading:**
- [R Documentation - Vector Operations](https://stat.ethz.ch/R-manual/R-devel/library/base/html/VectorOps.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Required: ndarray = "0.15"
use ndarray::prelude::*;
let vector1 = array![1., 2., 3.];
let vector2 = array![4., 5., 6.];
let sum_vec = &vector1 + &vector2;
let dotProduct = vector1.dot(&vector2);
```

**Special features:**
- ndarray library provides vector operations
- Type-safe vector operations at compile time

**Further reading:**
- [ndarray Documentation](https://docs.rs/ndarray/latest/ndarray/)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
vector1 = {1, 2, 3};
vector2 = {4, 5, 6};
sumVec = vector1 + vector2;
dotProduct = vector1 . vector2
```

**Special features:**
- `.` for dot product
- `*` performs element-wise multiplication
- Native vector support with symbolic computations

**Further reading:**
- [Wolfram Language Documentation - Vector Operations](https://reference.wolfram.com/language/guide/VectorOperations.html)

</TabItem>
</Tabs>


## 19.2.3. Complex Numbers

Built-in support for complex numbers with real and imaginary parts. Enables arithmetic operations and mathematical functions on complex numbers.

### Languages {#sprachen}

<Tabs availableTabs={['c', 'common-lisp', 'cpp', 'csharp', 'dart', 'fortran', 'go', 'haskell', 'julia', 'matlab', 'mojo', 'ocaml', 'octave', 'python', 'r', 'rust', 'swift', 'wolfram-language']} orangeTabs={['java', 'kotlin', 'scala', 'zig']}>
<TabItem value="c" label="C">

```c
// Required: #include <complex.h>
double complex z1 = 1.0 + 2.0 * I;
double complex z2 = 3.0 + 4.0 * I;
double complex sum = z1 + z2;
double real_part = creal(sum);
double imag_part = cimag(sum);
```

**Special features:**
- Support since C99
- `I` for the imaginary unit
- `creal()` and `cimag()` for real and imaginary parts

**Further reading:**
- [C Standard Library - Complex Numbers](https://en.cppreference.com/w/c/numeric/complex)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Required: using System.Numerics;
var z1 = new Complex(1.0, 2.0);
var z2 = new Complex(3.0, 4.0);
var sum = z1 + z2;
double realPart = sum.Real;
double imagPart = sum.Imaginary;
```

**Special features:**
- `System.Numerics.Complex` (since .NET Framework 4.0)
- Supports arithmetic operations and mathematical functions

**Further reading:**
- [Microsoft .NET Documentation - Complex](https://learn.microsoft.com/en-us/dotnet/api/system.numerics.complex)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Required: #include <complex>
std::complex<double> z1(1.0, 2.0);
std::complex<double> z2(3.0, 4.0);
std::complex<double> sum = z1 + z2;
double realPart = sum.real();
double imagPart = sum.imag();
```

**Special features:**
- `std::complex` template class
- Supports arithmetic operations and mathematical functions
- Part of the standard library

**Further reading:**
- [cppreference.com - std::complex](https://en.cppreference.com/w/cpp/numeric/complex)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Required: package:complex
import 'package:complex/complex.dart';
var z1 = Complex(1.0, 2.0);
var z2 = Complex(3.0, 4.0);
var sum = z1 + z2;
double realPart = sum.real;
double imagPart = sum.imaginary;
```

**Special features:**
- External library `package:complex` required
- Supports arithmetic operations

**Further reading:**
- [Dart complex package](https://pub.dev/packages/complex)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
complex :: z1, z2, sum
z1 = (1.0, 2.0)
z2 = (3.0, 4.0)
sum = z1 + z2
```

**Special features:**
- Native support for complex numbers
- Syntax: `(real, imag)` for complex literals
- Supports arithmetic operations and mathematical functions

**Further reading:**
- [Fortran Wiki - Complex Numbers](https://fortranwiki.org/fortran/show/Complex+numbers)

</TabItem>
<TabItem value="go" label="Go">

```go
// Required: github.com/meirizarrygelpi/cmplx
import "github.com/meirizarrygelpi/cmplx"
z1 := cmplx.New(1.0, 2.0)
z2 := cmplx.New(3.0, 4.0)
sum := z1.Add(z2)
```

**Special features:**
- External libraries required
- Standard library provides `complex64` and `complex128` types with limited functionality

**Further reading:**
- [Go Documentation - Complex Numbers](https://pkg.go.dev/builtin#complex)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Required: Data.Complex
import Data.Complex
z1 = 1.0 :+ 2.0
z2 = 3.0 :+ 4.0
sum = z1 + z2
realPart = realPart sum
imagPart = imagPart sum
```

**Special features:**
- `Data.Complex` module
- Syntax: `real :+ imag` for complex literals
- Supports arithmetic operations and mathematical functions

**Further reading:**
- [Haskell Documentation - Data.Complex](https://hackage.haskell.org/package/base/docs/Data-Complex.html)

</TabItem>
<TabItem value="java" label="Java">

```java
// No native support, external libraries required
// Example with Apache Commons Math
// Required: org.apache.commons.math3.complex
Complex z1 = new Complex(1.0, 2.0);
Complex z2 = new Complex(3.0, 4.0);
Complex sum = z1.add(z2);
double realPart = sum.getReal();
double imagPart = sum.getImaginary();
```

**Special features:**
- No native support in the standard library
- Apache Commons Math provides `Complex` class

**Further reading:**
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

**Special features:**
- Native support for complex numbers
- Syntax: `real + imag*im` or `real + imagim`
- Optimized for numerical computations

**Further reading:**
- [Julia Documentation - Complex Numbers](https://docs.julialang.org/en/v1/manual/complex-and-rational-numbers/)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// No native support, external libraries required
// Example with Apache Commons Math
// Required: org.apache.commons:commons-math3
import org.apache.commons.math3.complex.Complex
val z1 = Complex(1.0, 2.0)
val z2 = Complex(3.0, 4.0)
val sum = z1.add(z2)
val realPart = sum.real
val imagPart = sum.imaginary
```

**Special features:**
- No native support in the standard library
- Apache Commons Math provides `Complex` class

**Further reading:**
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

**Special features:**
- Native support for complex numbers
- Syntax: `real + imag*i` or `real + imag*j`
- Optimized for numerical computations

**Further reading:**
- [MATLAB Documentation - Complex Numbers](https://www.mathworks.com/help/matlab/ref/complex.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Required: cmath (standard library)
import cmath
z1 = complex(1.0, 2.0)
z2 = complex(3.0, 4.0)
sum = z1 + z2
realPart = sum.real
imagPart = sum.imag
```

**Special features:**
- Uses Python-like syntax
- `cmath` module for mathematical functions

**Further reading:**
- [Mojo Documentation](https://docs.modular.com/mojo/)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Required: Complex module *)
open Complex
let z1 = { re = 1.0; im = 2.0 }
let z2 = { re = 3.0; im = 4.0 }
let sum = add z1 z2
let realPart = sum.re
let imagPart = sum.im
```

**Special features:**
- `Complex` module in the standard library
- Record-based representation

**Further reading:**
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

**Special features:**
- MATLAB-compatible syntax
- Native support for complex numbers
- Syntax: `real + imag*i` or `real + imag*j`

**Further reading:**
- [GNU Octave Documentation - Complex Numbers](https://octave.org/doc/v8.1.0/Complex-Arithmetic.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# cmath is part of the standard library
import cmath
z1 = complex(1.0, 2.0)
z2 = complex(3.0, 4.0)
sum = z1 + z2
realPart = sum.real
imagPart = sum.imag
```

**Special features:**
- `complex` type in the standard library
- `cmath` module for mathematical functions
- Syntax: `complex(real, imag)` or `real + imagj`

**Further reading:**
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

**Special features:**
- Native support for complex numbers
- `complex()` function for creation
- `Re()` and `Im()` for real and imaginary parts

**Further reading:**
- [R Documentation - Complex Numbers](https://stat.ethz.ch/R-manual/R-devel/library/base/html/complex.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Required: num-complex = "0.4"
use num_complex::Complex;
let z1 = Complex::new(1.0, 2.0);
let z2 = Complex::new(3.0, 4.0);
let sum = z1 + z2;
let realPart = sum.re;
let imagPart = sum.im;
```

**Special features:**
- `num-complex` crate provides complex numbers
- Type-safe operations at compile time

**Further reading:**
- [num-complex Documentation](https://docs.rs/num-complex/latest/num_complex/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// No native support, external libraries required
// Example with Apache Commons Math
// Required: org.apache.commons:commons-math3
import org.apache.commons.math3.complex.Complex
val z1 = new Complex(1.0, 2.0)
val z2 = new Complex(3.0, 4.0)
val sum = z1.add(z2)
val realPart = sum.getReal
val imagPart = sum.getImaginary
```

**Special features:**
- No native support in the standard library
- Apache Commons Math provides `Complex` class

**Further reading:**
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

**Special features:**
- `Foundation.Complex` (since Swift 5.0)
- Supports arithmetic operations

**Further reading:**
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

**Special features:**
- Native support for complex numbers
- Syntax: `real + imag*I`
- Supports symbolic computations

**Further reading:**
- [Wolfram Language Documentation - Complex Numbers](https://reference.wolfram.com/language/guide/ComplexNumbers.html)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
// No native support, external libraries required
// Example with custom type
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

**Special features:**
- No native support in the standard library
- Custom types required

**Further reading:**
- [Zig Documentation](https://ziglang.org/documentation/)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Complex numbers (native support)
(defvar z1 #C(3 4))     ; 3 + 4i
(defvar z2 #C(1 -2))    ; 1 - 2i

;; Arithmetic
(+ z1 z2)               ; #C(4 2)
(* z1 z2)               ; #C(11 -2)

;; Functions
(abs z1)                 ; 5.0 (magnitude)
(phase z1)               ; 0.9272952 (angle)
(realpart z1)            ; 3
(imagpart z1)            ; 4
(conjugate z1)           ; #C(3 -4)
```

**Special features:**
- Native support for complex numbers with `#C(real imag)` syntax
- All arithmetic operators work with complex numbers
- `abs`, `phase`, `realpart`, `imagpart`, `conjugate` as standard functions
- Complex numbers with integer or floating-point components

**Further reading:**
- [Common Lisp HyperSpec - Complex](http://www.lispworks.com/documentation/HyperSpec/Body/t_comple.htm)

</TabItem>

</Tabs>


## 19.2.4. Arbitrary Precision Arithmetic

Arithmetic operations with arbitrary precision that are not limited by standard data types (int, float). Enables calculations with very large numbers or high precision.

### Languages {#sprachen}

<Tabs availableTabs={['c', 'csharp', 'cpp', 'clojure', 'common-lisp', 'dart', 'go', 'haskell', 'java', 'javascript', 'julia', 'kotlin', 'mercury', 'ocaml', 'perl', 'php', 'prolog', 'python', 'r', 'racket', 'ruby', 'rust', 'scala', 'scheme', 'swift', 'typescript', 'wolfram-language']} orangeTabs={['lua']}>
<TabItem value="c" label="C">

```c
// Required: GMP (GNU Multiple Precision Arithmetic Library)
#include <gmp.h>
mpz_t a, b, result;
mpz_init_set_str(a, "123456789012345678901234567890", 10);
mpz_init_set_str(b, "987654321098765432109876543210", 10);
mpz_init(result);
mpz_add(result, a, b);
```

**Special features:**
- GMP library required
- Separate functions for different operations
- Very performant for large numbers

**Further reading:**
- [GMP Documentation](https://gmplib.org/manual/)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Required: System.Numerics.BigInteger
using System.Numerics;
var a = BigInteger.Parse("123456789012345678901234567890");
var b = BigInteger.Parse("987654321098765432109876543210");
var result = a + b;
```

**Special features:**
- `BigInteger` for integers (since .NET Framework 4.0)
- For decimal numbers: `decimal` type with 28-29 significant digits

**Further reading:**
- [Microsoft .NET Documentation - BigInteger](https://learn.microsoft.com/en-us/dotnet/api/system.numerics.biginteger)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Required: GMP or Boost.Multiprecision
#include <boost/multiprecision/cpp_int.hpp>
using namespace boost::multiprecision;
cpp_int a("123456789012345678901234567890");
cpp_int b("987654321098765432109876543210");
cpp_int result = a + b;
```

**Special features:**
- Boost.Multiprecision or GMP library required
- Supports various precision levels

**Further reading:**
- [Boost.Multiprecision Documentation](https://www.boost.org/doc/libs/1_84_0/libs/multiprecision/doc/html/index.html)

</TabItem>
<TabItem value="clojure" label="Clojure">

```clojure
(def a (bigint "123456789012345678901234567890"))
(def b (bigint "987654321098765432109876543210"))
(def result (+ a b))
```

**Special features:**
- `bigint` for integers with arbitrary precision
- Automatic promotion to `bigint` on overflow
- `bigdec` for decimal numbers with arbitrary precision

**Further reading:**
- [Clojure Documentation - Arbitrary Precision](https://clojure.org/reference/data_structures#_arbitrary_precision_numbers)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
(defvar a (parse-integer "123456789012345678901234567890"))
(defvar b (parse-integer "987654321098765432109876543210"))
(defvar result (+ a b))
```

**Special features:**
- Native support for arbitrarily large integers
- Automatic promotion when needed
- Rational numbers with arbitrary precision

**Further reading:**
- [Common Lisp HyperSpec - Numbers](http://www.lispworks.com/documentation/HyperSpec/Body/t_number.htm)

</TabItem>
<TabItem value="dart" label="Dart">

```dart
// Required: package:decimal
import 'package:decimal/decimal.dart';
var a = Decimal.parse("123456789012345678901234567890");
var b = Decimal.parse("987654321098765432109876543210");
var result = a + b;
```

**Special features:**
- External libraries required
- `package:decimal` for decimal numbers with arbitrary precision

**Further reading:**
- [Dart decimal package](https://pub.dev/packages/decimal)

</TabItem>
<TabItem value="go" label="Go">

```go
// Required: math/big
import "math/big"
a, _ := new(big.Int).SetString("123456789012345678901234567890", 10)
b, _ := new(big.Int).SetString("987654321098765432109876543210", 10)
result := new(big.Int).Add(a, b)
```

**Special features:**
- `math/big` package in the standard library
- `big.Int` for integers, `big.Float` for floating-point numbers
- Method-based API

**Further reading:**
- [Go Documentation - math/big](https://pkg.go.dev/math/big)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Integer has arbitrary precision (built-in, no import needed)
a :: Integer
a = 123456789012345678901234567890

b :: Integer
b = 987654321098765432109876543210

result :: Integer
result = a + b  -- 1111111110111111111011111111100

-- Rational numbers with arbitrary precision
-- Required: Data.Ratio
ratio :: Rational
ratio = 1 % 3 + 1 % 6  -- yields 1 % 2
```

**Special features:**
- `Integer` is a built-in type with arbitrary precision (no import needed)
- `Rational` (from `Data.Ratio`) for rational numbers with arbitrary precision
- Automatic promotion from `Int` to `Integer` when needed
- GHC uses GMP (GNU Multiple Precision Arithmetic Library) for implementation

**Further reading:**
- [Haskell Prelude - Integer](https://hackage.haskell.org/package/base/docs/Prelude.html#t:Integer)

</TabItem>
<TabItem value="java" label="Java">

```java
import java.math.BigInteger;
BigInteger a = new BigInteger("123456789012345678901234567890");
BigInteger b = new BigInteger("987654321098765432109876543210");
BigInteger result = a.add(b);
```

**Special features:**
- `BigInteger` for integers (since Java 1.1)
- `BigDecimal` for decimal numbers with arbitrary precision
- Immutable types

**Further reading:**
- [Java Documentation - BigInteger](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/math/BigInteger.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Required: big.js or decimal.js
const Big = require('big.js');
const a = new Big("123456789012345678901234567890");
const b = new Big("987654321098765432109876543210");
const result = a.plus(b);
```

**Special features:**
- No native support
- External libraries like `big.js` or `decimal.js` required
- Native `Number` type has limited precision

**Further reading:**
- [big.js Documentation](https://mikemcl.github.io/big.js/)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
a = BigInt("123456789012345678901234567890")
b = BigInt("987654321098765432109876543210")
result = a + b
```

**Special features:**
- `BigInt` for integers with arbitrary precision
- `BigFloat` for floating-point numbers with configurable precision
- Native support

**Further reading:**
- [Julia Documentation - BigInt and BigFloat](https://docs.julialang.org/en/v1/manual/integers-and-floating-point-numbers/#BigInt-and-BigFloat)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
import java.math.BigInteger
val a = BigInteger("123456789012345678901234567890")
val b = BigInteger("987654321098765432109876543210")
val result = a.add(b)
```

**Special features:**
- Uses Java's `BigInteger` and `BigDecimal`
- Interoperability with Java

**Further reading:**
- [Kotlin Documentation - Numbers](https://kotlinlang.org/docs/numbers.html)

</TabItem>
<TabItem value="lua" label="Lua">

```lua
-- Required: lua-bint or external library
-- Example with lua-bint
local bint = require("bint")
local a = bint("123456789012345678901234567890")
local b = bint("987654321098765432109876543210")
local result = a + b
```

**Special features:**
- No native support
- External libraries required

**Further reading:**
- [lua-bint Documentation](https://github.com/edubart/lua-bint)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% integer module from the standard library (GMP-based)
:- import_module integer.

:- pred compute(integer::out) is det.
compute(Result) :-
    A = integer.det_from_string(
        "123456789012345678901234567890"),
    B = integer.det_from_string(
        "987654321098765432109876543210"),
    Result = A + B.

% Factorial with arbitrarily large numbers
:- func factorial(integer) = integer.
factorial(N) =
    ( if N =< integer.zero then integer.one
      else N * factorial(N - integer.one)
    ).
```

**Special features:**
- `integer` module in the standard library for arbitrarily large integers
- Internally implemented via GMP (GNU Multiple Precision Arithmetic Library)
- Default `int` type is machine-width; `integer` provides arbitrary precision
- Arithmetic operators (`+`, `-`, `*`, `//`, `mod`) overloaded for `integer`

**Further reading:**
- [Mercury Standard Library - integer](https://www.mercurylang.org/information/doc-release/mercury_library/integer.html)

</TabItem>
<TabItem value="ocaml" label="OCaml">

```ocaml
(* Required: Zarith library *)
open Zarith
let a = Z.of_string "123456789012345678901234567890"
let b = Z.of_string "987654321098765432109876543210"
let result = Z.add a b
```

**Special features:**
- Zarith library for arbitrarily large integers
- Very performant

**Further reading:**
- [Zarith Documentation](https://github.com/ocaml/Zarith)

</TabItem>
<TabItem value="perl" label="Perl">

```perl
use Math::BigInt;
my $a = Math::BigInt->new("123456789012345678901234567890");
my $b = Math::BigInt->new("987654321098765432109876543210");
my $result = $a + $b;
```

**Special features:**
- `Math::BigInt` for integers
- `Math::BigFloat` for floating-point numbers
- Automatic promotion with `use bignum;`

**Further reading:**
- [Perl Documentation - Math::BigInt](https://metacpan.org/pod/Math::BigInt)

</TabItem>
<TabItem value="php" label="PHP">

```php
// Required: BCMath extension
$a = "123456789012345678901234567890";
$b = "987654321098765432109876543210";
$result = bcadd($a, $b);
```

**Special features:**
- BCMath extension for arbitrary precision
- String-based API
- `bcadd()`, `bcmul()`, etc. for operations

**Further reading:**
- [PHP Documentation - BCMath](https://www.php.net/manual/en/book.bc.php)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% SWI-Prolog natively supports arbitrarily large integers (via GMP)
A is 123456789012345678901234567890,
B is 987654321098765432109876543210,
Result is A + B.
% Result = 1111111110111111111011111111100

% Factorial with large numbers
factorial(0, 1).
factorial(N, F) :-
    N > 0,
    N1 is N - 1,
    factorial(N1, F1),
    F is N * F1.

% ?- factorial(100, F).
% F = 93326215443944152681699238856266700490715968264381621468...
```

**Special features:**
- SWI-Prolog internally uses the GMP library and natively supports arbitrarily large integers.
- Integer arithmetic automatically switches to arbitrary precision when values exceed machine range.
- Rational numbers (`rdiv/2`) are also supported with arbitrary precision.
- `is/2` evaluates arithmetic expressions.

**Further reading:**
- [SWI-Prolog Manual - Arithmetic](https://www.swi-prolog.org/pldoc/man?section=arith)
- [SWI-Prolog Manual - GMP Support](https://www.swi-prolog.org/pldoc/man?section=gmp)

</TabItem>
<TabItem value="python" label="Python">

```python
a = int("123456789012345678901234567890")
b = int("987654321098765432109876543210")
result = a + b
```

**Special features:**
- Native support for arbitrarily large integers
- Automatic promotion from `int` to `long` (Python 2) or unlimited `int` (Python 3)
- `decimal.Decimal` for decimal numbers with arbitrary precision

**Further reading:**
- [Python Documentation - Numeric Types](https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex)

</TabItem>
<TabItem value="r" label="R">

```r
# Required: Rmpfr package
library(Rmpfr)
a <- mpfr("123456789012345678901234567890", precBits = 256)
b <- mpfr("987654321098765432109876543210", precBits = 256)
result <- a + b
```

**Special features:**
- Rmpfr package for arbitrary precision
- Configurable precision

**Further reading:**
- [Rmpfr Documentation](https://cran.r-project.org/package=Rmpfr)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
(define a (string->number "123456789012345678901234567890"))
(define b (string->number "987654321098765432109876543210"))
(define result (+ a b))
```

**Special features:**
- Native support for arbitrarily large integers
- Automatic promotion
- Rational numbers with arbitrary precision

**Further reading:**
- [Racket Documentation - Numbers](https://docs.racket-lang.org/reference/numbers.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
a = "123456789012345678901234567890".to_i
b = "987654321098765432109876543210".to_i
result = a + b
```

**Special features:**
- Native support for arbitrarily large integers
- Automatic promotion
- `BigDecimal` for decimal numbers with arbitrary precision

**Further reading:**
- [Ruby Documentation - Integer](https://ruby-doc.org/core-3.1.2/Integer.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Required: num-bigint = "0.4"
use num_bigint::BigInt;
let a = BigInt::parse_bytes(b"123456789012345678901234567890", 10).unwrap();
let b = BigInt::parse_bytes(b"987654321098765432109876543210", 10).unwrap();
let result = a + b;
```

**Special features:**
- `num-bigint` crate for arbitrarily large integers
- Type-safe operations

**Further reading:**
- [num-bigint Documentation](https://docs.rs/num-bigint/latest/num_bigint/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
import java.math.BigInteger
val a = new BigInteger("123456789012345678901234567890")
val b = new BigInteger("987654321098765432109876543210")
val result = a.add(b)
```

**Special features:**
- Uses Java's `BigInteger` and `BigDecimal`
- Interoperability with Java

**Further reading:**
- [Scala Documentation - Numbers](https://docs.scala-lang.org/overviews/scala-book/numbers.html)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
(define a (string->number "123456789012345678901234567890"))
(define b (string->number "987654321098765432109876543210"))
(define result (+ a b))
```

**Special features:**
- Native support for arbitrarily large integers
- Automatic promotion
- Rational numbers with arbitrary precision

**Further reading:**
- [R7RS Scheme Specification - Numbers](https://small.r7rs.org/attachment/r7rs.pdf)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
import Foundation
let a = Decimal(string: "123456789012345678901234567890")!
let b = Decimal(string: "987654321098765432109876543210")!
let result = a + b
```

**Special features:**
- `Decimal` type for decimal numbers with 38 significant digits
- For integers: `NSDecimalNumber` or external libraries

**Further reading:**
- [Swift Documentation - Decimal](https://developer.apple.com/documentation/foundation/decimal)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Required: big.js or decimal.js
import { Big } from 'big.js';
const a = new Big("123456789012345678901234567890");
const b = new Big("987654321098765432109876543210");
const result = a.plus(b);
```

**Special features:**
- No native support
- External libraries like `big.js` or `decimal.js` required
- Native `number` type has limited precision

**Further reading:**
- [big.js Documentation](https://mikemcl.github.io/big.js/)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Arbitrary Precision Arithmetic - natively supported *)
a = 123456789012345678901234567890
b = 987654321098765432109876543210
result = a + b
(* 1111111110111111111011111111100 *)

(* Arbitrary precision for floating-point numbers *)
N[Pi, 100]  (* Pi with 100 digits *)
```

**Special features:**
- Native support for arbitrarily large integers
- Automatic precision increase when needed
- `N[expr, n]` for arbitrary floating-point precision

**Further reading:**
- [Wolfram Language Documentation - Arbitrary-Precision Numbers](https://reference.wolfram.com/language/tutorial/ArbitraryPrecisionNumbers.html)

</TabItem>
</Tabs>


## 19.2.5. Symbolic Computation

Symbolic mathematics and algebraic manipulation of expressions. Enables calculations with variables, derivatives, integrations, and symbolic simplifications without numerical evaluation.

### Languages {#sprachen}

<Tabs availableTabs={['clojure', 'common-lisp', 'julia', 'python', 'r', 'racket', 'ruby', 'scheme', 'wolfram-language']} orangeTabs={['haskell', 'mercury', 'prolog']}>
<TabItem value="clojure" label="Clojure">

```clojure
;; Required: core.matrix or other libraries
;; Example with symbolic expressions
(def expr '(+ (* x 2) 3))
(def derivative (simplify (diff expr 'x)))
```

**Special features:**
- External libraries for symbolic computations required
- Clojure's macro system enables symbolic manipulation

**Further reading:**
- [Clojure Documentation](https://clojure.org/reference/documentation)

</TabItem>
<TabItem value="common-lisp" label="Common Lisp">

```lisp
;; Required: Maxima or other libraries
;; Example with symbolic expressions
(defvar expr '(+ (* x 2) 3))
(defvar derivative (simplify (diff expr 'x)))
```

**Special features:**
- Maxima is a Common Lisp-based system for symbolic mathematics
- Lisp's S-expression syntax is well-suited for symbolic manipulation

**Further reading:**
- [Maxima Documentation](https://maxima.sourceforge.io/documentation.html)

</TabItem>
<TabItem value="haskell" label="Haskell">

```haskell
-- Required: ad (for automatic differentiation)
import Numeric.AD

f :: Num a => a -> a
f x = x^2 + 2*x + 3

-- Automatic differentiation
f' :: Double -> Double
f' = diff f  -- f'(x) = 2*x + 2

result = f' 5.0  -- 12.0
```

**Special features:**
- No native symbolic computation, but libraries like `ad` for automatic differentiation
- Functional programming is well-suited for symbolic manipulation
- Additional libraries: `sbv` for symbolic execution, `simple-reflect` for symbolic reflection

**Further reading:**
- [Haskell ad package](https://hackage.haskell.org/package/ad)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# Required: Symbolics.jl
using Symbolics
@variables x
expr = x^2 + 2*x + 3
derivative = expand_derivatives(Differential(x)(expr))
```

**Special features:**
- Symbolics.jl package for symbolic computations
- Integrates well with Julia's numerical capabilities

**Further reading:**
- [Symbolics.jl Documentation](https://symbolics.juliasymbolics.org/)

</TabItem>
<TabItem value="mercury" label="Mercury">

```prolog
% Symbolic terms as algebraic data types
:- type expr
    --->    num(float)
    ;       var(string)
    ;       add(expr, expr)
    ;       mul(expr, expr).

% Symbolic derivative
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

**Special features:**
- Algebraic data types as natural representation of symbolic expressions
- Pattern matching for term rewriting
- Type-safe symbolic manipulation — compiler checks completeness of case distinctions
- No built-in CAS library — symbolic simplifications must be implemented manually

**Further reading:**
- [Mercury Language Reference - Types](https://www.mercurylang.org/information/doc-release/mercury_ref/Types.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Required: sympy
from sympy import symbols, diff, simplify
x = symbols('x')
expr = x**2 + 2*x + 3
derivative = diff(expr, x)
simplified = simplify(derivative)
```

**Special features:**
- SymPy library for symbolic mathematics
- Extensive functionality for algebra, calculus, and more

**Further reading:**
- [SymPy Documentation](https://docs.sympy.org/latest/index.html)

</TabItem>
<TabItem value="prolog" label="Prolog">

```prolog
% Symbolic terms as native data structures
% Prolog terms ARE symbolic expressions

% Symbolic expression: 2*x + 3
Expr = add(mul(2, x), 3).

% Symbolic derivative
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

**Special features:**
- Prolog terms are inherently symbolic expressions — no special library needed for basic operations.
- Symbolic manipulation occurs via unification and pattern matching on terms.
- No built-in CAS library (Computer Algebra System) — more complex symbolic simplifications must be implemented manually or integrated via external systems.
- Well-suited for rule-based term rewriting and symbolic derivatives.

**Further reading:**
- [SWI-Prolog Manual - Terms](https://www.swi-prolog.org/pldoc/man?section=manipterm)
- [SWI-Prolog Manual - Arithmetic](https://www.swi-prolog.org/pldoc/man?section=arith)

</TabItem>
<TabItem value="r" label="R">

```r
# Required: Ryacas or other libraries
library(Ryacas)
x <- Sym("x")
expr <- x^2 + 2*x + 3
derivative <- deriv(expr, x)
```

**Special features:**
- Ryacas package for symbolic computations
- Binds Yacas (Yet Another Computer Algebra System)

**Further reading:**
- [Ryacas Documentation](https://cran.r-project.org/package=Ryacas)

</TabItem>
<TabItem value="racket" label="Racket">

```racket
;; Symbolic expressions as lists (S-expressions)
(define expr '(+ (* x 2) 3))

;; Simple symbolic manipulation
(define (substitute expr var val)
  (cond
    [(equal? expr var) val]
    [(list? expr) (map (lambda (e) (substitute e var val)) expr)]
    [else expr]))

(substitute expr 'x 5)  ; '(+ (* 5 2) 3)
```

**Special features:**
- Lisp-like syntax is well-suited for symbolic manipulation
- S-expressions are natural representation for mathematical expressions
- External libraries for advanced symbolic computations

**Further reading:**
- [Racket Documentation - Math](https://docs.racket-lang.org/math/index.html)

</TabItem>
<TabItem value="ruby" label="Ruby">

```ruby
# Required: symbolic or other libraries
# Example with symbolic expressions
require 'symbolic'
x = var(:x)
expr = x**2 + 2*x + 3
derivative = expr.diff(x)
```

**Special features:**
- External libraries for symbolic computations required
- Ruby's metaprogramming capabilities can be used for symbolic manipulation

**Further reading:**
- [Ruby symbolic gem](https://rubygems.org/gems/symbolic)

</TabItem>
<TabItem value="scheme" label="Scheme">

```scheme
;; Symbolic expressions as lists (homoiconicity)
(define expr '(+ (* x 2) 3))

;; Manual symbolic derivative (example)
;; Required: external libraries for simplify/diff
;; (define derivative (simplify (diff expr 'x)))

;; Scheme syntax enables natural representation of symbolic expressions
(define (eval-expr expr env)
  (cond
    ((number? expr) expr)
    ((symbol? expr) (cdr (assoc expr env)))
    ((list? expr) (apply (car expr) (map (lambda (e) (eval-expr e env)) (cdr expr))))))
```

**Special features:**
- Homoiconicity enables natural symbolic manipulation
- Expressions representable and manipulable as lists
- Advanced symbolic computations require external libraries

**Further reading:**
- [R7RS Scheme Specification](https://small.r7rs.org/attachment/r7rs.pdf)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```mathematica
(* Symbolic computation *)
expr = x^2 + 2*x + 3;
derivative = D[expr, x]           (* 2 + 2*x *)
integral = Integrate[expr, x]     (* x^3/3 + x^2 + 3*x *)
simplified = Simplify[(x^2 - 1)/(x - 1)]  (* 1 + x *)
```

**Special features:**
- Native support for symbolic computations
- Extensive functionality for algebra, calculus, differential equations, and more
- Integrates symbolic and numerical computations
- Undefined identifiers are automatically symbolic

**Further reading:**
- [Wolfram Language Documentation - Symbolic Computation](https://reference.wolfram.com/language/guide/SymbolicComputation.html)

</TabItem>
</Tabs>


## 19.2.6. Format Statements

Declarative format specifications for input and output that are defined separately from I/O statements. Enables precise control over data formatting.

### Languages {#sprachen}

<Tabs availableTabs={['ada', 'fortran', 'python', 'r']}>
<TabItem value="ada" label="Ada">

```ada
-- Format specification in Ada
Put_Line(Item => 123.456, Fore => 6, Aft => 2, Exp => 0);
-- Output: "123.46"
```

**Special features:**
- Formatting via parameters in I/O procedures
- `Fore`, `Aft`, `Exp` parameters for floating-point numbers
- No separate FORMAT statements like in Fortran

**Further reading:**
- [Ada Reference Manual - Input-Output](https://www.adaic.org/resources/add_content/standards/12rm/html/RM-A.html)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! Format statement separate from I/O statement
100 FORMAT(I5, F8.2, A10)
WRITE(*, 100) 123, 45.67, 'Text'
! Output: "  123   45.67      Text"
```

**Special features:**
- Format statements are defined separately from I/O statements
- Format codes: `I` for Integer, `F` for Float, `A` for String
- Format statements can be reused

**Further reading:**
- [Fortran Wiki - Format Statements](https://fortranwiki.org/fortran/show/Format+statements)

</TabItem>
<TabItem value="python" label="Python">

```python
# Format specification with format() or f-strings
value = 123.456
formatted = format(value, "8.2f")
# Output: "  123.46"
```

**Special features:**
- Format specification as string literals
- `format()` function or f-strings (since Python 3.6)
- No separate format statements like in Fortran

**Further reading:**
- [Python Documentation - Format Specification Mini-Language](https://docs.python.org/3/library/string.html#formatspec)

</TabItem>
<TabItem value="r" label="R">

```r
# Format specification with sprintf() or format()
value <- 123.456
formatted <- sprintf("%8.2f", value)
# Output: "  123.46"
```

**Special features:**
- Format specification as string literals
- `sprintf()` or `format()` functions
- C-like format specifications

**Further reading:**
- [R Documentation - sprintf](https://stat.ethz.ch/R-manual/R-devel/library/base/html/sprintf.html)

</TabItem>
</Tabs>


## 19.2.7. Array Operations (Vectorized)

Vectorized operations on arrays that are applied element-wise to all elements without explicit loops. Enables efficient computations on large datasets.

### Languages {#sprachen}

<Tabs availableTabs={['csharp', 'cpp', 'fortran', 'julia', 'matlab', 'mojo', 'octave', 'r', 'rust', 'swift', 'wolfram-language']} orangeTabs={['c', 'go', 'java', 'javascript', 'kotlin', 'python', 'scala', 'typescript']}>
<TabItem value="c" label="C">

```c
// Requires: manual vectorization or SIMD intrinsics
// Example with SIMD (since C11)
#include <immintrin.h>
__m256 a = _mm256_set_ps(1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0);
__m256 b = _mm256_set_ps(2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0);
__m256 result = _mm256_add_ps(a, b);
```

**Special features:**
- No native vectorization at language level
- SIMD intrinsics for vectorized operations
- Compilers can automatically vectorize

**Further reading:**
- [Intel Intrinsics Guide](https://www.intel.com/content/www/us/en/docs/intrinsics-guide/index.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// Requires: System.Numerics
using System.Numerics;
var a = new Vector<float>(new float[] {1, 2, 3, 4, 5, 6, 7, 8});
var b = new Vector<float>(new float[] {2, 3, 4, 5, 6, 7, 8, 9});
var result = a + b;
```

**Special features:**
- `System.Numerics.Vector<T>` for SIMD operations (since .NET Core 2.0)
- Automatic vectorization by JIT compiler possible

**Further reading:**
- [Microsoft .NET Documentation - Vector](https://learn.microsoft.com/en-us/dotnet/api/system.numerics.vector-1)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Requires: Eigen or std::valarray
#include <valarray>
std::valarray<double> a = {1, 2, 3, 4};
std::valarray<double> b = {2, 3, 4, 5};
std::valarray<double> result = a + b;
```

**Special features:**
- `std::valarray` for vectorized operations
- Eigen library provides extensive vectorized operations
- Compilers can automatically vectorize

**Further reading:**
- [cppreference.com - std::valarray](https://en.cppreference.com/w/cpp/numeric/valarray)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
real, dimension(4) :: a, b, result
a = [1.0, 2.0, 3.0, 4.0]
b = [2.0, 3.0, 4.0, 5.0]
result = a + b
```

**Special features:**
- Native support for vectorized array operations (since Fortran 90)
- Element-wise operations without explicit loops
- Optimized for numerical computations

**Further reading:**
- [Fortran Wiki - Array Operations](https://fortranwiki.org/fortran/show/Array+operations)

</TabItem>
<TabItem value="go" label="Go">

```go
// Requires: gonum.org/v1/gonum/mat
import "gonum.org/v1/gonum/mat"
a := mat.NewVecDense(4, []float64{1, 2, 3, 4})
b := mat.NewVecDense(4, []float64{2, 3, 4, 5})
var result mat.VecDense
result.AddVec(a, b)
```

**Special features:**
- Gonum library provides vectorized operations
- No native vectorization at language level

**Further reading:**
- [Gonum Documentation](https://pkg.go.dev/gonum.org/v1/gonum/mat)

</TabItem>
<TabItem value="java" label="Java">

```java
// Requires: Apache Commons Math or other libraries
// Example with manual vectorization
double[] a = {1, 2, 3, 4};
double[] b = {2, 3, 4, 5};
double[] result = new double[4];
for (int i = 0; i < 4; i++) {
    result[i] = a[i] + b[i];
}
```

**Special features:**
- No native vectorization at language level
- JVM can automatically vectorize (Auto-Vectorization)
- External libraries for vectorized operations

**Further reading:**
- [Java Documentation - Arrays](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Arrays.html)

</TabItem>
<TabItem value="javascript" label="JavaScript">

```javascript
// Requires: Typed Arrays for efficient operations
const a = new Float64Array([1, 2, 3, 4]);
const b = new Float64Array([2, 3, 4, 5]);
const result = new Float64Array(4);
for (let i = 0; i < 4; i++) {
    result[i] = a[i] + b[i];
}
```

**Special features:**
- Typed Arrays for efficient numerical operations
- No native vectorization at language level
- JavaScript engines can automatically optimize

**Further reading:**
- [MDN Web Docs - Typed Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
a = [1, 2, 3, 4]
b = [2, 3, 4, 5]
result = a + b
```

**Special features:**
- Native support for vectorized array operations
- Element-wise operations without explicit loops
- Optimized for numerical computations

**Further reading:**
- [Julia Documentation - Array Operations](https://docs.julialang.org/en/v1/manual/arrays/#Elementwise-Operations)

</TabItem>
<TabItem value="kotlin" label="Kotlin">

```kotlin
// Requires: manual vectorization or libraries
val a = doubleArrayOf(1.0, 2.0, 3.0, 4.0)
val b = doubleArrayOf(2.0, 3.0, 4.0, 5.0)
val result = DoubleArray(4) { i -> a[i] + b[i] }
```

**Special features:**
- No native vectorization at language level
- JVM can automatically vectorize
- External libraries for vectorized operations

**Further reading:**
- [Kotlin Documentation - Arrays](https://kotlinlang.org/docs/arrays.html)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
a = [1, 2, 3, 4];
b = [2, 3, 4, 5];
result = a + b;
```

**Special features:**
- Native support for vectorized array operations
- Element-wise operations without explicit loops
- Optimized for numerical computations

**Further reading:**
- [MATLAB Documentation - Vectorization](https://www.mathworks.com/help/matlab/matlab_prog/vectorization.html)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Requires: numpy
from numpy import array
a = array([1, 2, 3, 4])
b = array([2, 3, 4, 5])
result = a + b
```

**Special features:**
- Uses NumPy-like syntax
- Supports vectorized operations via NumPy

**Further reading:**
- [Mojo Documentation](https://docs.modular.com/mojo/)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
a = [1, 2, 3, 4];
b = [2, 3, 4, 5];
result = a + b;
```

**Special features:**
- MATLAB-compatible syntax
- Native support for vectorized array operations
- Element-wise operations without explicit loops

**Further reading:**
- [GNU Octave Documentation - Vectorization](https://octave.org/doc/v8.1.0/Vectorization-and-Faster-Code-Execution.html)

</TabItem>
<TabItem value="python" label="Python">

```python
# Requires: import numpy as np
import numpy as np
a = np.array([1, 2, 3, 4])
b = np.array([2, 3, 4, 5])
result = a + b
```

**Special features:**
- NumPy provides vectorized array operations
- Element-wise operations without explicit loops
- Very efficient for numerical computations

**Further reading:**
- [NumPy Documentation - Array Operations](https://numpy.org/doc/stable/reference/routines.array-manipulation.html)

</TabItem>
<TabItem value="r" label="R">

```r
a <- c(1, 2, 3, 4)
b <- c(2, 3, 4, 5)
result <- a + b
```

**Special features:**
- Native support for vectorized operations
- Element-wise operations without explicit loops
- Optimized for numerical and statistical computations

**Further reading:**
- [R Documentation - Vectorization](https://stat.ethz.ch/R-manual/R-devel/library/base/html/Vectorize.html)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Requires: ndarray = "0.15"
use ndarray::prelude::*;
let a = array![1., 2., 3., 4.];
let b = array![2., 3., 4., 5.];
let result = &a + &b;
```

**Special features:**
- ndarray library provides vectorized operations
- Type-safe operations at compile time

**Further reading:**
- [ndarray Documentation](https://docs.rs/ndarray/latest/ndarray/)

</TabItem>
<TabItem value="scala" label="Scala">

```scala
// Requires: manual vectorization or libraries
val a = Array(1.0, 2.0, 3.0, 4.0)
val b = Array(2.0, 3.0, 4.0, 5.0)
val result = a.zip(b).map { case (x, y) => x + y }
```

**Special features:**
- No native vectorization at language level
- JVM can automatically vectorize
- Functional operations for array manipulation

**Further reading:**
- [Scala Documentation - Arrays](https://docs.scala-lang.org/overviews/collections-2.13/arrays.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
// Requires: Accelerate framework for SIMD
import Accelerate
let a: [Float] = [1, 2, 3, 4]
let b: [Float] = [2, 3, 4, 5]
var result = [Float](repeating: 0, count: 4)
vDSP_vadd(a, 1, b, 1, &result, 1, vDSP_Length(4))
```

**Special features:**
- Accelerate Framework for vectorized operations
- SIMD support for efficient computations

**Further reading:**
- [Apple Documentation - Accelerate](https://developer.apple.com/documentation/accelerate)

</TabItem>
<TabItem value="typescript" label="TypeScript">

```typescript
// Requires: Typed Arrays for efficient operations
const a = new Float64Array([1, 2, 3, 4]);
const b = new Float64Array([2, 3, 4, 5]);
const result = new Float64Array(4);
for (let i = 0; i < 4; i++) {
    result[i] = a[i] + b[i];
}
```

**Special features:**
- Typed Arrays for efficient numerical operations
- No native vectorization at language level
- JavaScript engines can automatically optimize

**Further reading:**
- [MDN Web Docs - Typed Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)

</TabItem>
<TabItem value="wolfram-language" label="Wolfram Language">

```wolfram
a = {1, 2, 3, 4};
b = {2, 3, 4, 5};
result = a + b
```

**Special features:**
- Native support for vectorized operations
- Element-wise operations without explicit loops
- Supports symbolic computations

**Further reading:**
- [Wolfram Language Documentation - List Operations](https://reference.wolfram.com/language/guide/ListOperations.html)

</TabItem>
</Tabs>


## 19.2.8. Array Slicing (Fortran-style)

Array slicing with start and end index as well as optional step size in a compact syntax. Supports negative indices for reverse counting and enables precise control over array sections.

### Languages {#sprachen}

<Tabs availableTabs={['fortran', 'julia', 'matlab', 'octave', 'python', 'r', 'wolfram-language']}>
<TabItem value="fortran" label="Fortran">

```fortran
integer, dimension(10) :: arr
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
slice = arr(2:8:2)  ! Elements 2, 4, 6, 8
! Syntax: arr(start:end:step)
```

**Special features:**
- Syntax: `arr(start:end:step)`
- Start and end index are inclusive
- Step size optional (default: 1)
- Negative indices not supported

**Further reading:**
- [Fortran Wiki - Array Slicing](https://fortranwiki.org/fortran/show/Array+slicing)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
slice = arr[2:2:8]  # Elements 2, 4, 6, 8
# Syntax: arr[start:step:end]
```

**Special features:**
- Syntax: `arr[start:step:end]`
- Start and end index are inclusive
- Step size optional (default: 1)
- Supports negative indices for reverse counting

**Further reading:**
- [Julia Documentation - Array Indexing](https://docs.julialang.org/en/v1/manual/arrays/#man-array-indexing)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
slice = arr(2:2:8);  % Elements 2, 4, 6, 8
% Syntax: arr(start:step:end)
```

**Special features:**
- Syntax: `arr(start:step:end)`
- Start and end index are inclusive
- Step size optional (default: 1)
- Supports negative indices for reverse counting with `end`

**Further reading:**
- [MATLAB Documentation - Array Indexing](https://www.mathworks.com/help/matlab/math/array-indexing.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
slice = arr(2:2:8);  % Elements 2, 4, 6, 8
% Syntax: arr(start:step:end)
```

**Special features:**
- MATLAB-compatible syntax
- Syntax: `arr(start:step:end)`
- Start and end index are inclusive
- Step size optional (default: 1)

**Further reading:**
- [GNU Octave Documentation - Index Expressions](https://octave.org/doc/v8.1.0/Index-Expressions.html)

</TabItem>
<TabItem value="python" label="Python">

```python
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
slice = arr[1:8:2]  # Elements 2, 4, 6, 8
# Syntax: arr[start:end:step]
```

**Special features:**
- Syntax: `arr[start:end:step]`
- Start index is inclusive, end index is exclusive
- Step size optional (default: 1)
- Supports negative indices for reverse counting

**Further reading:**
- [Python Documentation - Sequence Types](https://docs.python.org/3/library/stdtypes.html#sequence-types-list-tuple-range)

</TabItem>
<TabItem value="r" label="R">

```r
arr <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
slice <- arr[seq(2, 8, by = 2)]  # Elements 2, 4, 6, 8
# Syntax: arr[seq(start, end, by = step)]
```

**Special features:**
- Uses `seq()` function for step size
- Syntax: `arr[seq(start, end, by = step)]`
- Start and end index are inclusive
- Supports negative indices

**Further reading:**
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

**Special features:**
- `All` for all elements of a dimension
- `;;` (Span) for range selection
- Multi-dimensional slicing natively supported

**Further reading:**
- [Wolfram Language Documentation - Part](https://reference.wolfram.com/language/ref/Part.html)

</TabItem>
</Tabs>


## 19.2.9. Column-major Order

Storage of multi-dimensional arrays column-wise in memory. Elements are stored first along the first dimension (columns), then along the second dimension (rows). This is the opposite of Row-major Order.

### Languages {#sprachen}

<Tabs availableTabs={['fortran', 'julia', 'matlab', 'octave', 'r']}>
<TabItem value="fortran" label="Fortran">

```fortran
integer, dimension(3, 3) :: matrix
matrix = reshape([1, 2, 3, 4, 5, 6, 7, 8, 9], [3, 3])
! Storage: 1, 2, 3, 4, 5, 6, 7, 8, 9
! Matrix:
! 1  4  7
! 2  5  8
! 3  6  9
```

**Special features:**
- Column-major order is standard in Fortran
- Optimized for column-wise access
- Important for performance in numerical computations

**Further reading:**
- [Fortran Wiki - Array Storage](https://fortranwiki.org/fortran/show/Array+storage)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
matrix = reshape([1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 3)
# Storage: 1, 2, 3, 4, 5, 6, 7, 8, 9
# Matrix:
# 1  4  7
# 2  5  8
# 3  6  9
```

**Special features:**
- Column-major order is standard in Julia
- Optimized for column-wise access
- Important for performance in numerical computations

**Further reading:**
- [Julia Documentation - Multi-dimensional Arrays](https://docs.julialang.org/en/v1/manual/arrays/#Multi-dimensional-Arrays)

</TabItem>
<TabItem value="matlab" label="MATLAB">

```matlab
matrix = reshape([1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 3);
% Storage: 1, 2, 3, 4, 5, 6, 7, 8, 9
% Matrix:
% 1  4  7
% 2  5  8
% 3  6  9
```

**Special features:**
- Column-major order is standard in MATLAB
- Optimized for column-wise access
- Important for performance in numerical computations

**Further reading:**
- [MATLAB Documentation - Matrix Indexing](https://www.mathworks.com/help/matlab/math/matrix-indexing.html)

</TabItem>
<TabItem value="octave" label="Octave">

```octave
matrix = reshape([1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 3);
% Storage: 1, 2, 3, 4, 5, 6, 7, 8, 9
% Matrix:
% 1  4  7
% 2  5  8
% 3  6  9
```

**Special features:**
- MATLAB-compatible syntax
- Column-major order is standard in Octave
- Optimized for column-wise access

**Further reading:**
- [GNU Octave Documentation - Matrices](https://octave.org/doc/v8.1.0/Matrices.html)

</TabItem>
<TabItem value="r" label="R">

```r
matrix <- matrix(c(1, 2, 3, 4, 5, 6, 7, 8, 9), nrow = 3, ncol = 3, byrow = FALSE)
# Storage: 1, 2, 3, 4, 5, 6, 7, 8, 9
# Matrix:
# 1  4  7
# 2  5  8
# 3  6  9
```

**Special features:**
- Column-major order is standard in R
- `byrow = FALSE` for column-major order (default)
- Optimized for column-wise access

**Further reading:**
- [R Documentation - matrix](https://stat.ethz.ch/R-manual/R-devel/library/base/html/matrix.html)

</TabItem>
</Tabs>

## 19.2.10. SIMD-Support

Explicit use of SIMD instructions (Single Instruction, Multiple Data) for parallel data processing at hardware level. Enables simultaneous processing of multiple data values in a single processor instruction.

### Languages {#sprachen}

<Tabs availableTabs={['c', 'csharp', 'cpp', 'd', 'mojo', 'odin', 'rust', 'swift', 'zig']} yellowTabs={['fortran', 'java', 'julia', 'nim']} orangeTabs={['go']}>
<TabItem value="c" label="C">

```c
// Requires: #include <xmmintrin.h> (SSE)
__m128 a = _mm_set_ps(4.0f, 3.0f, 2.0f, 1.0f);
__m128 b = _mm_set_ps(8.0f, 7.0f, 6.0f, 5.0f);
__m128 result = _mm_add_ps(a, b);
// result = {6.0, 8.0, 10.0, 12.0}
```

**Special features:**
- SIMD via platform-specific intrinsics (`_mm_` prefix for SSE, `_mm256_` for AVX)
- Headers: `<xmmintrin.h>` (SSE), `<immintrin.h>` (AVX), `<arm_neon.h>` (NEON)
- Compilers can automatically vectorize with `-O2`/`-O3`

**Further reading:**
- [Intel Intrinsics Guide](https://www.intel.com/content/www/us/en/docs/intrinsics-guide/index.html)

</TabItem>
<TabItem value="csharp" label="C#">

```csharp
// System.Runtime.Intrinsics (since .NET Core 3.0)
var a = Vector128.Create(1.0f, 2.0f, 3.0f, 4.0f);
var b = Vector128.Create(5.0f, 6.0f, 7.0f, 8.0f);
var result = Sse.Add(a, b);
// result = {6.0, 8.0, 10.0, 12.0}
```

**Special features:**
- `System.Runtime.Intrinsics` for platform-specific SIMD operations (since .NET Core 3.0)
- `Vector128<T>` and `Vector256<T>` as SIMD types
- Platform detection via `Sse.IsSupported`, `Avx.IsSupported` etc.

**Further reading:**
- [Microsoft .NET Documentation - Hardware Intrinsics](https://learn.microsoft.com/en-us/dotnet/api/system.runtime.intrinsics)

</TabItem>
<TabItem value="cpp" label="C++">

```cpp
// Requires: #include <xmmintrin.h> (SSE)
__m128 a = _mm_set_ps(4.0f, 3.0f, 2.0f, 1.0f);
__m128 b = _mm_set_ps(8.0f, 7.0f, 6.0f, 5.0f);
__m128 result = _mm_add_ps(a, b);
// result = {6.0, 8.0, 10.0, 12.0}
```

**Special features:**
- Same intrinsics as C (`_mm_*` for SSE, `_mm256_*` for AVX)
- `std::experimental::simd` as portable SIMD wrapper (P0214, planned for C++26)
- Compilers can automatically vectorize with `-O2`/`-O3`

**Further reading:**
- [cppreference.com - SIMD Library](https://en.cppreference.com/w/cpp/experimental/simd)

</TabItem>
<TabItem value="d" label="D">

```d
// Requires: import core.simd;
float4 a = [1.0f, 2.0f, 3.0f, 4.0f];
float4 b = [5.0f, 6.0f, 7.0f, 8.0f];
float4 result = a + b;
// result = [6.0, 8.0, 10.0, 12.0]
```

**Special features:**
- `core.simd` provides native SIMD types (`float4`, `double2`, `int4` etc.)
- Operator overloading for element-wise operations
- Automatic use of best available SIMD instructions

**Further reading:**
- [D Documentation - core.simd](https://dlang.org/phobos/core_simd.html)

</TabItem>
<TabItem value="fortran" label="Fortran">

```fortran
! OpenMP SIMD directive for explicit vectorization
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

**Special features:**
- OpenMP SIMD directives (`!$OMP SIMD`) for explicit vectorization (since OpenMP 4.0)
- No direct SIMD types at language level
- Compiler auto-vectorization often sufficient for numerical loops

**Further reading:**
- [OpenMP SIMD Constructs](https://www.openmp.org/spec-html/5.2/openmpch6.html)

</TabItem>
<TabItem value="go" label="Go">

```go
// No native SIMD support at language level
// SIMD only possible via assembly files or unsafe
a := [4]float32{1.0, 2.0, 3.0, 4.0}
b := [4]float32{5.0, 6.0, 7.0, 8.0}
var result [4]float32
for i := 0; i < 4; i++ {
    result[i] = a[i] + b[i]
}
// Compiler can automatically vectorize simple loops
```

**Special features:**
- No SIMD intrinsics or SIMD types at language level
- SIMD only possible via Go assembly files or `unsafe` package
- Compiler auto-vectorization for simple loops

**Further reading:**
- [Go Documentation - Assembly](https://go.dev/doc/asm)

</TabItem>
<TabItem value="java" label="Java">

```java
// Vector API (Incubator since JDK 16)
// Requires: --add-modules jdk.incubator.vector
var species = FloatVector.SPECIES_128;
var a = FloatVector.fromArray(species, new float[]{1.0f, 2.0f, 3.0f, 4.0f}, 0);
var b = FloatVector.fromArray(species, new float[]{5.0f, 6.0f, 7.0f, 8.0f}, 0);
var result = a.add(b);
// result = {6.0, 8.0, 10.0, 12.0}
```

**Special features:**
- Vector API as incubator module (JEP 338, since JDK 16)
- Platform-independent API with automatic use of best SIMD instructions
- `FloatVector.SPECIES_128` for 128-bit, `SPECIES_256` for 256-bit

**Further reading:**
- [JDK Vector API (JEP 338)](https://openjdk.org/jeps/338)

</TabItem>
<TabItem value="julia" label="Julia">

```julia
# @simd macro for compiler vectorization
a = Float32[1.0, 2.0, 3.0, 4.0]
b = Float32[5.0, 6.0, 7.0, 8.0]
result = similar(a)

@simd for i in eachindex(a)
    result[i] = a[i] + b[i]
end
# result = [6.0, 8.0, 10.0, 12.0]
```

**Special features:**
- `@simd` macro explicitly signals vectorization to compiler
- SIMD.jl package for low-level SIMD types
- `@inbounds @simd` for maximum performance

**Further reading:**
- [Julia Documentation - Performance Tips (SIMD)](https://docs.julialang.org/en/v1/manual/performance-tips/#man-performance-annotations)

</TabItem>
<TabItem value="mojo" label="Mojo">

```python
# Native SIMD types
var a = SIMD[DType.float32, 4](1.0, 2.0, 3.0, 4.0)
var b = SIMD[DType.float32, 4](5.0, 6.0, 7.0, 8.0)
var result = a + b
# result = [6.0, 8.0, 10.0, 12.0]
```

**Special features:**
- `SIMD[DType, size]` as native type in language core
- Supports arbitrary vector widths
- Operator overloading for element-wise operations

**Further reading:**
- [Mojo Documentation - SIMD](https://docs.modular.com/mojo/stdlib/builtin/simd/)

</TabItem>
<TabItem value="nim" label="Nim">

```nim
# Requires: nimsimd
var a = mm_setr_ps(1.0, 2.0, 3.0, 4.0)
var b = mm_setr_ps(5.0, 6.0, 7.0, 8.0)
var result = mm_add_ps(a, b)
# result = {6.0, 8.0, 10.0, 12.0}
```

**Special features:**
- nimsimd package provides wrappers around SSE-, AVX- and NEON intrinsics
- Alternative: direct C intrinsics via `{.importc.}` pragma
- Compiler can automatically vectorize

**Further reading:**
- [nimsimd Documentation](https://github.com/guzba/nimsimd)

</TabItem>
<TabItem value="odin" label="Odin">

```c
// Native SIMD types
a: #simd[4]f32 = {1.0, 2.0, 3.0, 4.0}
b: #simd[4]f32 = {5.0, 6.0, 7.0, 8.0}
result := a + b
// result = {6.0, 8.0, 10.0, 12.0}
```

**Special features:**
- `#simd[N]T` syntax for native SIMD vectors
- Operator overloading for element-wise operations
- Supports various vector widths and element types

**Further reading:**
- [Odin Documentation - SIMD](https://odin-lang.org/docs/overview/#simd)

</TabItem>
<TabItem value="rust" label="Rust">

```rust
// Requires: use std::arch::x86_64::*;
unsafe {
    let a = _mm_set_ps(4.0, 3.0, 2.0, 1.0);
    let b = _mm_set_ps(8.0, 7.0, 6.0, 5.0);
    let result = _mm_add_ps(a, b);
    // result = {6.0, 8.0, 10.0, 12.0}
}
```

**Special features:**
- `std::arch` module for stable platform-specific intrinsics
- SIMD operations require `unsafe` block
- Portable SIMD API (`std::simd`) as experimental feature (nightly)
- Feature detection with `is_x86_feature_detected!("sse")`

**Further reading:**
- [Rust Documentation - std::arch](https://doc.rust-lang.org/std/arch/index.html)

</TabItem>
<TabItem value="swift" label="Swift">

```swift
let a = SIMD4<Float>(1.0, 2.0, 3.0, 4.0)
let b = SIMD4<Float>(5.0, 6.0, 7.0, 8.0)
let result = a + b
// result = SIMD4<Float>(6.0, 8.0, 10.0, 12.0)
```

**Special features:**
- Native SIMD types: `SIMD2`, `SIMD4`, `SIMD8`, `SIMD16`, `SIMD32`, `SIMD64`
- Generic over element type (`SIMD4<Float>`, `SIMD4<Int32>` etc.)
- Operator overloading for element-wise operations

**Further reading:**
- [Apple Documentation - SIMD](https://developer.apple.com/documentation/swift/simd)

</TabItem>
<TabItem value="zig" label="Zig">

```zig
const a: @Vector(4, f32) = .{ 1.0, 2.0, 3.0, 4.0 };
const b: @Vector(4, f32) = .{ 5.0, 6.0, 7.0, 8.0 };
const result = a + b;
// result = { 6.0, 8.0, 10.0, 12.0 }
```

**Special features:**
- `@Vector(N, T)` as native SIMD type
- Operator overloading for element-wise operations
- Compile-time evaluation of SIMD operations possible

**Further reading:**
- [Zig Documentation - Vectors](https://ziglang.org/documentation/master/#Vectors)


</TabItem>
</Tabs>
