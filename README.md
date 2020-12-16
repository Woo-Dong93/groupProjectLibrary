## Boost-MathQuill
> Mathquill Library에 없는 Latex 문법을 추가하여 재배포한 라이브러리
## Npm
> https://www.npmjs.com/package/boost-mathquill
## Features
- Matrix : ```\begin{pmatrix}&\\&\end{pmatrix}```
- Multi Lines : ``` \newline```
- combi : ```\combi{ }```
- Double Integral : ```\iint```
- Arrow : ```\xrightarrow_{}^{}```
- Additionally, many other formula symbols have been added.
## Installation
Use the package manager [npm](https://www.npmjs.com/package/boost-mathquill) to install.
```
npm install boost-mathquill
```
## Examples
### Editable Math Field
```
import React, { useState } from 'react'
import { addStyles, EditableMathField } from 'react-mathquill'
// inserts the required css to the <head> block.
// you can skip this, if you want to do that by yourself.
addStyles()
const EditableMathExample = () => {
  const [latex, setLatex] = useState('\\frac{1}{\\sqrt{2}}\\cdot 2')
  return (
    <div>
      <EditableMathField
        latex={latex}
        onChange={(mathField) => {
          setLatex(mathField.latex())
        }}
      />
      <p>{latex}</p>
    </div>
  )
}
```
### Static Math Field
```
import React from 'react'
import { addStyles, StaticMathField } from 'react-mathquill'
// inserts the required css to the <head> block.
// you can skip this, if you want to do that by yourself.
addStyles()
const StaticMathExample = () => (
  <StaticMathField>{'\\frac{1}{\\sqrt{2}}\\cdot 2'}</StaticMathField>
)
```
## Docs
- [Mathquill](http://mathquill.com/)
- [Mathquill Docs](http://docs.mathquill.com/)
- [React Mathquill](https://www.npmjs.com/package/react-mathquill)
