
import images from './images/img.jpg'
export const Avatar = ({imagen}, ancho, altura) => {
    return (
        <div>
            <img src={images} alt="gg" style={{
                borderRadius:imagen,
                borderWidth:ancho,
                height: altura
               

            }}/>
        </div>
    )
}
