import React, { useState, useEffect } from 'react';
import { Heart, Info } from 'lucide-react';  

const Clothes = () => {
    const [clothes, setClothes] = useState([]);
    const [showModal, setShowModal] = useState(false);  
    const [selectedItem, setSelectedItem] = useState(null);  
    const [likedItems, setLikedItems] = useState(new Set()); 

    useEffect(() => {
        fetch('/clothes.json')
            .then((response) => response.json())
            .then((data) => setClothes(data))
            .catch((error) => console.error("Error loading the clothes data: ", error));
    }, []);

    const handleInfoClick = (item) => {
        setSelectedItem(item);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedItem(null);
    };

    const handleHeartClick = (itemId) => {
        const updatedLikedItems = new Set(likedItems);
        if (updatedLikedItems.has(itemId)) {
            updatedLikedItems.delete(itemId);
        } else {
            updatedLikedItems.add(itemId);
        }
        setLikedItems(updatedLikedItems);
    };

    return (
        <div className="p-6 mt-10 mb-20">
            <h1 className="text-4xl font-bold text-center text-[#6C4E31] mb-20">Clothes</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20">
                {clothes.map((item) => (
                    <div key={item.id} className="bg-[#EADBC8] shadow-xl rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
                        <div className="w-full h-80 overflow-hidden">
                            <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                        </div>
                        <div className="p-6 flex flex-col items-center">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{item.name}</h3>
                            <p className="text-sm text-gray-500 mb-6 text-center">{item.category}</p>
                            <div className="flex justify-center items-center space-x-6">
                                <button 
                                    onClick={() => handleHeartClick(item.id)} 
                                    className={`transition-all duration-300 ${likedItems.has(item.id) ? 'text-red-500 fill-red-500' : 'text-[#6C4E31]'} hover:text-red-600`}
                                >
                                    <Heart size={24} className={likedItems.has(item.id) ? 'fill-red-500' : ''} />
                                </button>
                                <button 
                                    onClick={() => handleInfoClick(item)} 
                                    className="text-[#6C4E31] hover:text-red-600"
                                >
                                    <Info size={24} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {showModal && selectedItem && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg w-96 p-6">
                        <h2 className="text-center text-2xl font-bold text-[#6C4E31] mb-4">{selectedItem.name}</h2>
                        <div className="w-full h-80 overflow-hidden mb-4">
                            <img src={selectedItem.image} alt={selectedItem.name} className="w-full h-full object-contain" />
                        </div>
                        <p className="text-lg text-gray-600 mb-4">Category: {selectedItem.category}</p>
                        <p className="text-gray-700 text-base mb-6">{selectedItem.description}</p>
                        <button 
                            onClick={handleCloseModal} 
                            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Clothes;
