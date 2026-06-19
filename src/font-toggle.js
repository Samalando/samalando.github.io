import { useState, useEffect } from 'react'

export default function usePersistentToggle(key) {
    const [enabled, setEnabled] = useState(localStorage.getItem(key) === 'true')

    useEffect(() => {
        document.body.classList.toggle(key, enabled)
        localStorage.setItem(key, enabled)
    }, [enabled, key])

    return [enabled, setEnabled]
}