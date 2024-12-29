import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { toast } from 'react-toastify';
import axios from 'axios';

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
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="name">İsim</Label>
                <Input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </FormGroup>
            <FormGroup>
                <Label for="size">Pizza Boyutu</Label>
                <Input
                    type="select"
                    id="size"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    required
                >
                    <option value="">Seçin</option>
                    <option value="small">Küçük</option>
                    <option value="medium">Orta</option>
                    <option value="large">Büyük</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="toppings">Malzemeler</Label>
                <div>
                    {['peperoni', 'mushrooms', 'onions', 'sausage', 'bacon'].map((topping) => (
                        <div key={topping}>
                            <Input
                                type="checkbox"
                                id={topping}
                                checked={toppings.includes(topping)}
                                onChange={() => handleToppingChange(topping)}
                            />
                            <Label for={topping}>{topping}</Label>
                        </div>
                    ))}
                </div>
            </FormGroup>
            <FormGroup>
                <Label for="notes">Notlar</Label>
                <Input
                    type="textarea"
                    id="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                />
            </FormGroup>
            <Button type="submit">Sipariş Ver</Button>
        </Form>
    );
};

export default OrderPizza;
