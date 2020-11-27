# api-multiplicaion
Api encargada de multiplicar valores dado un parámetro de entrada.

## Como Usar:

#instalar dependencias
npm install

#correr api
node src/app.js

##Docker
docker-compse up -build

#Url
<span>

*http://localhost:3000*

</span>

#Verificar si la api esta arriba

**GET:**
***``
{url}/health
``***
##

## Como usra


**GET:** 
***``{url}/multiplicacion/10x2x1
``***

**Where:**

| Parameter    |Descripction   |Example   |
| ------------| ------------ | ---------- |
|  10x2x1  |  es la cadena de operaciones a realizar  | **10x2x1** |

**Ejemplo respuesta:**

```json
{
    "multiplicacion": {
        "operacion": "10x2x1",
        "resultado": 20
    }
}
```

**Donde:**

| Parameter         |Descripction         |Example        |
| ------------      | ------------        | ------------  |
|  multiplicacion            |  arreglo de operaciones  |  **operacion, resultado**  |
|  operacion        |  cadena de opraciones a realizar | **10x2x1**|
|  resultado        |  resultado de la operacion | **20**|

## Si necesitas otra informacion

Escribirme a:

**quilarque1@gmail.com**
