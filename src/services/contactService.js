const API_URL = import.meta.env.VITE_API_URL;

export const saveContact = async (data) => {
    const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    return response.json();
};