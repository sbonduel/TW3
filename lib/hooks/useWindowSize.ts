import { useState, useEffect } from 'react';

export function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        // Obtenir la largeur et hauteur de la fenêtre
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        // Ajouter un écouteur d'événements pour détecter les changements de taille de la fenêtre
        window.addEventListener('resize', handleResize);

        // Initialiser la taille de la fenêtre
        handleResize();

        // Nettoyer l'écouteur d'événements lorsqu'on quitte le composant
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowSize;
}