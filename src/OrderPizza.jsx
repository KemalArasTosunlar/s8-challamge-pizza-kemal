import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { toast } from 'react-toastify';
import axios from 'axios';
import './OrderPizza.css';

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
        e.preventDefault(); // Formun varsayılan gönderimini engelliyorum
        if (name.length < 3) {
            toast.error('İsim en az 3 karakter olmalıdır.');
            return;
        }
        try {
            const response = await axios.post('/api/order', { name, size, dough, toppings, notes });
            toast.success('Siparişiniz başarıyla alındı!');
        } catch (error) {
            console.error('Error response:', error.response); // Log the error response
            const errorMessage = error.response?.data?.message || 'Sipariş alırken bir hata oluştu.';
            toast.error(errorMessage); // Display specific error message
        }
    };

    return (
        <div style={{ height: '100vh' }}>
            <Form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-gray rounded shadow-md">
                <FormGroup>
                    <Label for="name" className="text-[#292929]">İsim</Label>
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
                            <p>Seçimler: <span className="selections">25.00₺</span></p>
                            <p>Toplam: <span className="total" style={{ color: 'red' }}>{(25.00 * quantity).toFixed(2)}₺</span></p>
                            <button type="submit" className="order-button">SİPARİŞ VER</button>
                        </div>
                    </div>
                </FormGroup>
            </Form>
        </div>
    );
};

export default OrderPizza;
