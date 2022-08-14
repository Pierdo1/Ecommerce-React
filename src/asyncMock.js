const products = [
    
    //Mothers
    
    {id: 1, name: "Asus Prime Z590A", description: "Motherboard Asus Prime Z590A", price: 1200, category: "Mother", img: '/img/mother6.jpg', stock: 10},
    {id: 2, name: "MSI A520M-A Pro", description: "Motherboard MSI A520M-A Pro", price: 1100, category: "Mother", img: '/img/mother5.jpg', stock: 10},
    {id: 3, name: "Asus Prime B560M-A", description: "Motherboard Asus Prime B560M-A", price: 1200, category: "Mother", img: '/img/mother4.jpg', stock: 10},
    {id: 4, name: "ROG Strix B550-F", description: "Motherboard ROG Strix B550-F Gaming", price: 1400, category: "Mother", img: '/img/mother3.jpg', stock: 10},
    {id: 5, name: "Aorus Z590I Ultra", description: "Motherboard Aorus Z590I Ultra", price: 1200, category: "Mother", img: '/img/mother2.jpg', stock: 10},
    {id: 6, name: "Aorus B550 Elite AX V2", description: "Motherboard Aorus B550 Elite AX V2", price: 1500, category: "Mother", img: '/img/mother1.jpg', stock: 10},

    //CPUS
    
/*     {id: 7, name: "Ryzen 5 3600X", description: "AMD Ryzen 5 3600X", price: 500, category: "CPU", img: '/img/cpu6.jpg', stock: 10},
    {id: 8, name: "Ryzen 7 3700X", description: "AMD Ryzen 7 3700X", price: 500, category: "CPU", img: '/img/cpu5.jpg', stock: 10},
    {id: 9, name: "Ryzen 9 3900X", description: "AMD Ryzen 9 3900X", price: 500, category: "CPU", img: '/img/cpu4.jpg', stock: 10},
    {id: 10, name: "Intel Core i3-10100F", description: "Intel Core i3-10100F", price: 700, category: "CPU", img: '/img/cpu3.jpg', stock: 10},
    {id: 11, name: "Intel Core i9-9900K", description: "Intel Core i9-9900K", price: 700, category: "CPU", img: '/img/cpu2.jpg', stock: 10},
    {id: 12, name: "Intel Core i7-9700F", description: "Intel Core i7-9700F", price: 700, category: "CPU", img: '/img/cpu1.jpg', stock: 10},
    
    //GPUS
    
    {id: 13, name: "GeForce RTX 3090", description: "Nvidia GeForce RTX 3090", price: 900, category: "GPU", img: '/img/gpu1.jpg', stock: 10},
    {id: 14, name: "Radeon RX 6900X", description: "AMD Radeon RX 6900X", price: 1400, category: "GPU", img: '/img/gpu6.jpg', stock: 10},
    {id: 15, name: "Radeon RX 6500XT", description: "AMD Radeon RX 6500XT", price: 7000, category: "GPU", img: '/img/gpu5.jpg', stock: 10},
    {id: 16, name: "GeForce RTX 2060", description: "Nvidia GeForce RTX 2060", price: 777, category: "GPU", img: '/img/gpu4.jpg', stock: 10},
    {id: 17, name: "GeForce RTX 3050", description: "Nvidia GeForce RTX 3050", price: 234, category: "GPU", img: '/img/gpu3.jpg', stock: 10},
    {id: 18, name: "GeForce RTX 2080TI", description: "Nvidia GeForce RTX 2080TI", price: 1600, category: "GPU", img: '/img/gpu2.jpg', stock: 10},
    
    //Gabinetes
    
    {id: 19, name: "Gabinete gamer 1", description: "Gabinete gamer", price: 1600, category: "Gabinete", img: '/img/gabinete1.jpg', stock: 10},
    {id: 20, name: "Gabinete gamer 2", description: "Gabinete gamer", price: 3200, category: "Gabinete", img: '/img/gabinete2.jpg', stock: 10},
    {id: 21, name: "Gabinete gamer 3", description: "Gabinete gamer", price: 2300, category: "Gabinete", img: '/img/gabinete3.jpg', stock: 10},
    {id: 22, name: "Gabinete gamer 4", description: "Gabinete gamer", price: 5600, category: "Gabinete", img: '/img/gabinete4.jpg', stock: 10},
    {id: 23, name: "Gabinete gamer 5", description: "Gabinete gamer", price: 1700, category: "Gabinete", img: '/img/gabinete5.jpg', stock: 10},
    {id: 24, name: "Gabinete gamer 6", description: "Gabinete gamer", price: 800, category: "Gabinete", img: '/img/gabinete6.jpg', stock: 10}, */
]


export const Productos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}