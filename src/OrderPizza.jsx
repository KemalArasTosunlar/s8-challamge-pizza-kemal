import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { toast } from 'react-toastify';
import axios from 'axios';
import { pizza } from './Data'; // Import the pizza data

const OrderPizza = () => {
    const [quantity, setQuantity] = useState(1); // Initialize quantity state
    const [name, setName] = useState('');
    const [size, setSize] = useState('');
    const [dough, setDough] = useState(''); // State for dough thickness
    const [toppings, setToppings] = useState([]);
    const [notes, setNotes] = useState('');
    const [formErrors, setFormErrors] = useState({}); // State for form errors
    const [isFormValid, setIsFormValid] = useState(false); // State for form validity

    const handleToppingChange = (topping) => {
        setToppings((prev) => 
            prev.includes(topping) ? prev.filter((t) => t !== topping) : [...prev, topping]
        );
    };

const navigate = useNavigate(); // Initialize useNavigate for navigation

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        if (name.length < 3 || !size || !dough) {
            toast.error('Lütfen tüm gerekli alanları doldurun.');
            return;
        }
        
        const payload = {
            isim: name,
            boyut: size,
            malzemeler: toppings,
            özel: notes,
        };

        console.log('Payload being sent:', payload); // Log the payload
        try {
            const response = await axios.post('https://reqres.in/api/pizza', payload);
            console.log('Response from API:', response.data); // Log the response
            toast.success('Siparişiniz başarıyla alındı!');
            const totalPrice = (parseFloat(pizza.price.replace('₺', '')) * quantity + toppings.length * 5).toFixed(2);
            setTimeout(() => {
                navigate('/success', { state: { pizzaName: pizza.name, selectedToppings: toppings, totalPrice } });
                // Redirect to success page after 3 seconds with state
            }, 3000);
        } catch (error) {
            console.error('Error response:', error.response); // Log the error response
            const errorMessage = error.response?.data?.message || 'Sipariş alırken bir hata oluştu.';
            toast.error(errorMessage); // Display specific error message
        }
    };

    return (
        <div style={{ height: '200vh'}}>
            <div style={{ textAlign: 'center' }}>
                <h2 className="pizza-name">{pizza.name}</h2>
                <div className="pizza-info" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span>Fiyat: {pizza.price}</span>
                    <span>Puan: {pizza.rate}</span>
                    <span>Yorum: {pizza.comments}</span>
                </div>
                <p className="pizza-description">{pizza.description}</p>
            </div>
            <Form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-gray rounded shadow-md">
                <FormGroup>
                <Label for="name" className="text-[#292929]"><strong>İsim</strong></Label>
                    <Input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="border border-[#292929] rounded p-2"
                    />
                </FormGroup>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <FormGroup style={{ marginRight: '20px' }}>
                        <Label for="size" className="text-[#292929]">
                            <strong>Boyut Seç</strong> <span style={{ color: 'red' }}>*</span>
                        </Label>
                        <div>
                            <label className="container">Küçük
                                <input type="radio" name="size" value="small" onChange={(e) => setSize(e.target.value)} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">Orta
                                <input type="radio" name="size" value="medium" onChange={(e) => setSize(e.target.value)} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="container">Büyük
                                <input type="radio" name="size" value="large" onChange={(e) => setSize(e.target.value)} />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                    </FormGroup>

                    <FormGroup>
                        <Label for="dough" className="text-[#292929]">
                            <strong>Hamur Kalınlığı</strong> <span style={{ color: 'red' }}>*</span>
                        </Label>
                        <Input
                            type="select"
                            id="dough"
                            required
                            onChange={(e) => setDough(e.target.value)}
                        >
                            <option value="">Seçin</option>
                            <option value="thick">Kalın Hamur</option>
                            <option value="thin">İnce Hamur</option>
                            <option value="classic">Klasik Hamur</option>
                        </Input>
                    </FormGroup>
                </div>

                <FormGroup>
                    <Label for="toppings">
                        <strong className="text-[#292929]">Ek Malzemeler</strong>
                    </Label>
                    <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {['peperoni', 'Sosis', 'Kanada Jambonu', 'Tavuk Izgara', 'Soğan', 'Domates', 'Mısır', 'Sucuk', 'Jalepeno', 'Sarımsak', 'Biber', 'Ananas', 'Kabak'].map((topping, index) => (
                            <div key={topping} style={{ width: '30%' }}>
                                <Input
                                    type="checkbox"
                                    id={topping}
                                    checked={toppings.includes(topping)}
                                    onChange={() => handleToppingChange(topping)}
                                    className="mr-2"
                                />
                                <Label for={topping} className="text-[#292929]">{topping}</Label>
                            </div>
                        ))}
                    </div>
                </FormGroup>

                <FormGroup>
                    <Label for="notes" className="text-[#292929]">Siparişinize eklemek istediğiniz bir not var mı?</Label>
                    <Input
                        type="textarea"
                        id="notes"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="border border-[#292929] rounded p-2"
                    />
                </FormGroup>

                <FormGroup>
                    <Label className="text-[#292929]">Sipariş Özeti</Label>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div className="quantity-control">
                            <button type="button" className="decrease" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                            <span className="quantity border-box">{quantity}</span>
                            <button type="button" className="increase" onClick={() => setQuantity(quantity + 1)}>+</button>
                        </div>
                        <div className="summary-box">
                            <h3>Sipariş Toplamı</h3>
                            <p>Seçimler: <span className="selections">{pizza.name} + {toppings.join(', ')}</span></p>
                            <p>Toplam: <span className="total" style={{ color: 'red' }}>
                                {(parseFloat(pizza.price.replace('₺', '')) * quantity + toppings.length * 5).toFixed(2)}₺
                            </span></p>
                            <button type="submit" className="order-button">SİPARİŞ VER</button>
                        </div>
                    </div>
                </FormGroup>
            </Form>
        </div>
    );
};

export default OrderPizza;
