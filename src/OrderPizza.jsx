import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { toast } from 'react-toastify';
import axios from 'axios';
import logo from './assets/logo.svg'; // Logo dosyasını içe aktarıyorum

const OrderPizza = () => {
    const [name, setName] = useState('');
    const [size, setSize] = useState('');
    const [toppings, setToppings] = useState([]);
    const [notes, setNotes] = useState('');

    const handleToppingChange = (topping) => {
        setToppings((prev) => 
            prev.includes(topping) ? prev.filter((t) => t !== topping) : [...prev, topping]
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/order', { name, size, toppings, notes });
            toast.success('Siparişiniz başarıyla alındı!');
        } catch (error) {
            toast.error('Sipariş alırken bir hata oluştu.');
        }
    };

    return (
        <Form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-[#5F5F5F] rounded shadow-md">
            <img src={logo} alt="Logo" className="mb-4" /> {/* Logo eklendi */}
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
            <FormGroup>
                <Label for="size" className="text-[#292929]">Pizza Boyutu</Label>
                <Input
                    type="select"
                    id="size"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    required
                    className="border border-[#292929] rounded p-2"
                >
                    <option value="">Seçin</option>
                    <option value="small">Küçük</option>
                    <option value="medium">Orta</option>
                    <option value="large">Büyük</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="toppings" className="text-[#292929]">Malzemeler</Label>
                <div>
                    {['peperoni', 'mushrooms', 'onions', 'sausage', 'bacon'].map((topping) => (
                        <div key={topping} className="flex items-center">
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
                <Label for="notes" className="text-[#292929]">Notlar</Label>
                <Input
                    type="textarea"
                    id="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="border border-[#292929] rounded p-2"
                />
            </FormGroup>
            <Button type="submit" className="bg-[#CE2829] text-white rounded p-2 hover:bg-red-600">Sipariş Ver</Button>
        </Form>
    );
};

export default OrderPizza;
