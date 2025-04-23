import React, { useState } from 'react';
import { Music4, Scissors, Calendar, Clock } from 'lucide-react';

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbxNwS_Gv39lEsTmMG91TEiDtK1HviGL41uXOznxtoLILIPM8ybVj5sB4divIQARgTEzAg/exec';

export const SubscribeForm = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Slanje...');
        try {
            const res = await fetch(SHEET_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({ email }),
            });
            const json = await res.json();
            if (json.result === 'success') {
                setStatus('🎉 Hvala što ste se prijavili za obaveštenja!');
                setEmail('');
            } else {
                throw new Error(json.error || 'Unknown error');
            }
        } catch (err) {
            console.error(err);
            setStatus('❌ Greška pri slanju, pokušajte ponovo.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <input
                type="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Vaša email adresa"
                className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
            />
            <button
                type="submit"
                className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-700"
            >
                Prijavi se
            </button>
            {status && (
                <p className="md:w-full text-center mt-2 text-sm text-gray-700">
                    {status}
                </p>
            )}
        </form>
    );
}