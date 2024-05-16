import React from 'react'

export const ItemListContainer = () => {
    return (
        <div className='Todas-Tarjetas'>
            <div className="card">
                <img src="https://robnei.blog/wp-content/uploads/2022/01/Digimon-18.png" alt="" />
                    <div className="card-content">
                        <h2 className="card-title">V-mon</h2>
                        <p className='descripcion'>Tiene aspecto humanoide y de pequeño dinosaurio. Su piel es prácticamente azul entera, salvo por el estómago y la boca, que son blancos; aparte de la "V" en su frente. Su cabeza es grande y esférica, con dos apéndices cónicos carnosos, que probablemente le sirvan de orejas. En su nariz tiene un pequeño cuerno.</p>
                        <a href="#" className="btn">Agregar al Carrito</a>
                        <a href="#" className="btn">Ver Detalles</a>
                    </div>
            </div>
            <div className="card">
                <img src="https://robnei.blog/wp-content/uploads/2022/01/Digimon-11-946x1024.png" alt="" />
                    <div className="card-content">
                        <h2 className="card-title">Gabumon</h2>
                        <p className='descripcion'>Gabumon es un Digimon de tipo Reptil de nivel Infantil. Su nombre deriva de las marionetas Gabu Kashira.</p>
                        <a href="#" className="btn">Agregar al Carrito</a>
                        <a href="#" className="btn">Ver Detalles</a>
                    </div>
            </div>
            <div className="card">
                <img src="https://robnei.blog/wp-content/uploads/2022/01/Digimon-8-1003x1024.png" alt="" />
                    <div className="card-content">
                        <h2 className="card-title">Gatomon</h2>
                        <p className='descripcion'>Gatomon (Tailmon en la versión japonesa) es un Digimon Tipo Bestia Sagrada. Su nombre japonés es sacado de Tail (cola en ingles) por su larga cola, mientras que su nombre inglés es sacado del español gato. Su diseño se basa en un gato doméstico.</p>
                        <a href="#" className="btn">Agregar al Carrito</a>
                        <a href="#" className="btn">Ver Detalles</a>
                    </div>
            </div>
        </div>
    )
}
