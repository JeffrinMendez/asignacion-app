const MostrarAlerta = ({MostrarAlerta,altura, ancho, colorFondo,colorText,texto,textSize}) =>{

return(

<div>
    <div style={{
        height: altura,
        width: ancho,
        background: colorFondo,
        color: colorText,
        fontSize: textSize

    }}>
   {texto}
    </div>
  <br/>

</div>

)
}

export {
    MostrarAlerta
}