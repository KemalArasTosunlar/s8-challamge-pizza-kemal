import React from 'react';
import successImage from '../images/iteration-2-images/Success.png'; // Resim yolu

const Success = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[#FAF7F2]">
            <h1 className="text-4xl font-bold text-[#292929]">Siparişiniz Alındı!</h1>
            <img src={successImage} alt="Sipariş Onayı" className="mt-4" />
        </div>
    );
};

export default Success;
