import React from 'react';

const Resultado = ({total, plazo, cantidad}) => {
    return ( 
        <div className="u-full-width resultado">
            <h2>Resultado</h2>
            <p>La cantidad solicitada es de € {cantidad}</p>
            <p>El total a pagar es € {total}</p>
            <p>El plazo es de {plazo} meses</p>
            <p>pago mensual de € {(total / plazo).toFixed(2)}</p>
        </div>
     );
}
 
export default Resultado;