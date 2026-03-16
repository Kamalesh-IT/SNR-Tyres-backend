import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js';

dotenv.config();

const jkTyres = [
    // Car Tyres
    {
        name: 'UX Royale 205/60 R16',
        brand: 'JK Tyre',
        category: ['Summer'],
        roadType: ['Highway', 'City'],
        price: 6250,
        description: 'Low noise, high-speed stability and comfort for premium sedans.',
        image: 'https://www.google.com/aclk?sa=L&ai=DChsSEwjYuPbaoaWTAxWuqmYCHQarDdcYACICCAEQBRoCc20&co=1&ase=2&gclid=CjwKCAjw1N7NBhAoEiwAcPchp0RoLq0KjEjTgw6noi_ZUaRbv6-CvP9x8rOjz417_5hGuAPcH_N3eRoCleAQAvD_BwE&cid=CAASZuRolA3INA2mIpsPGeuRhA6lDK68VSg_ROUAz5zsMunGCKNtd92wpXOJh6Mnfdqj1Lpw_QO3tNBXVr9xQkaMxN4rAnJwb6oksOAp9eQeFT-PKeWOzW5xNPlM-1O6jfUHIMAR-3BgPg&cce=2&category=acrcp_v1_32&sig=AOD64_0fMiynfe8F8Y3Q_wXDCQFHh5j7UQ&ctype=5&q=&nis=4&ved=2ahUKEwjq_vHaoaWTAxW7cWwGHeRBHOoQ9aACKAB6BAgKECA&adurl=',
        stock: 45,
        rating: 4.8,
        vehicleType: 'Car',
        specifications: '205/60 R16, Speed Rating V, Load Index 92',
        suitableModels: ['Honda City', 'Hyundai Verna']
    },
    {
        name: 'Ultima NXT 155/70 R13',
        brand: 'Pirelli',
        category: ['All-Season'],
        roadType: ['City'],
        price: 3150,
        description: 'Better mileage and strong grip for entry-level hatchbacks.',
        image: 'https://www.google.com/imgres?q=hd%20images%20Ultima%20NXT%20155%2F70%20R13&imgurl=https%3A%2F%2Fwww.tyremarket.com%2Fimages%2Fproducts%2FULTIMA_NXT.jpg&imgrefurl=https%3A%2F%2Fwww.tyremarket.com%2FJK-Ultima-NXT-155-70-R-13-Tubeless-75-T-Car-Tyre%3Fsrsltid%3DAfmBOoqHHLCsMcMYlJr7YvTscyPaV5v_rSp8ruDt9j9lidOpm-cN7J1A&docid=hpltEBcupUlY7M&tbnid=YiN4KenGPSnP5M&vet=12ahUKEwjT_vukoqWTAxWlRmwGHbwlEC8QnPAOegQIGRAB..i&w=350&h=350&hcb=2&ved=2ahUKEwjT_vukoqWTAxWlRmwGHbwlEC8QnPAOegQIGRAB',
        stock: 60,
        rating: 4.5,
        vehicleType: 'Car',
        specifications: '155/70 R13, Speed Rating S, Load Index 75',
        suitableModels: ['Hyundai Santro', 'Hyundai Eon']
    },
    {
        name: 'Ultima Hi Life 155/80 R13',
        brand: 'Pirelli',
        category: ['All-Season'],
        roadType: ['City'],
        price: 3450,
        description: 'Long tread life and comfortable ride for popular family cars.',
        image: 'https://images-eu.ssl-images-amazon.com/images/I/71OLLRxJ4tL._AC_UL495_SR435,495_.jpg',
        stock: 55,
        rating: 4.6,
        vehicleType: 'Car',
        specifications: '155/80 R13, Speed Rating S, Load Index 79',
        suitableModels: ['Maruti Wagon R', 'Tata Tiago']
    },
    {
        name: 'Levitas Ultra 195/55 R16',
        brand: 'JK Tyre',
        category: ['Summer'],
        roadType: ['Highway'],
        price: 7150,
        description: 'Premium comfort and high grip for premium hatchbacks and sedans.',
        image: 'https://www.google.com/imgres?q=hd%20images%20Levitas%20Ultra%20195%2F55%20R16&imgurl=https%3A%2F%2Frukminim2.flixcart.com%2Fimage%2F480%2F480%2Fxif0q%2Fvehicle-tire%2F1%2F4%2Fh%2Fw-225-55-r16-levitas-ultra-800-tube-less-jk-tyre-original-imagvrexxbqksqke.jpeg%3Fq%3D90&imgrefurl=https%3A%2F%2Fwww.flipkart.com%2Fjk-tyre-levitas-ultra-4-wheeler%2Fp%2Fitma338c62c5e545&docid=FLsKX69uoiASqM&tbnid=4O0XF0wnSqDwfM&vet=12ahUKEwjG2_buo6WTAxVMcGwGHRH4AFQQnPAOegQIGhAB..i&w=480&h=480&hcb=2&ved=2ahUKEwjG2_buo6WTAxVMcGwGHRH4AFQQnPAOegQIGhAB',
        stock: 35,
        rating: 4.9,
        vehicleType: 'Car',
        specifications: '195/55 R16, Speed Rating V, Load Index 87',
        suitableModels: ['Hyundai i20', 'Honda Jazz']
    },
    // SUV Tyres
    {
        name: 'UX Touring 205/65 R16',
        brand: 'Michelin',
        category: ['All-Season'],
        roadType: ['Highway', 'City'],
        price: 5950,
        description: 'Smooth ride and long tread life specifically designed for SUVs and MUVs.',
        image: 'https://www.google.com/aclk?sa=L&ai=DChsSEwjWt4K1pKWTAxX3p2YCHWRqILsYACICCAEQAxoCc20&co=1&ase=2&gclid=CjwKCAjw1N7NBhAoEiwAcPchp2LkeGr_n_193A33bhCmShXuQ9yQAUjufMFGXp74p9MjTAlOegzdchoCbYkQAvD_BwE&cid=CAASZuRowI16XyFSfEu204eA_4Da6_rtxS2SjJi2kX1_ICwREgmbaL47nfy7G9Le94d5M01Bw_qwBleWfBFQWYR3Av6H7sDhF8qCrmkvKaIPkIzv2mqN2zgbqpDeEDpgc-inIKRfFv0ABg&cce=2&category=acrcp_v1_32&sig=AOD64_1-i0uKfvtTp5K1MirMlyaBk5nLqQ&ctype=5&q=&nis=4&ved=2ahUKEwis9Py0pKWTAxWN1jgGHUidKekQ9aACKAB6BAgFEBc&adurl=',
        stock: 40,
        rating: 4.7,
        vehicleType: 'SUV',
        specifications: '205/65 R16, Speed Rating H, Load Index 95',
        suitableModels: ['Hyundai Creta', 'Kia Seltos']
    },
    {
        name: 'Ranger H/T 235/65 R17',
        brand: 'JK Tyre',
        category: ['All-Season'],
        roadType: ['Highway'],
        price: 9250,
        description: 'Highway terrain specialist with low noise and high-speed stability.',
        image: 'https://www.google.com/aclk?sa=L&ai=DChsSEwjiqu3RpaWTAxVlqGYCHWsiB-AYACICCAEQAxoCc20&co=1&ase=2&gclid=CjwKCAjw1N7NBhAoEiwAcPchp0bp8ZOU42aTnURjd3xmO-N5lYrov44MRrv1TjEbj1VDMPEedPp3ORoCRZYQAvD_BwE&cid=CAASZuRop3Ul76PlwDQTEKhGicyz_MMOiL8L_FCOFosTBpYP_hoCfi3Ap0_TsSVwq11sXOTPhaPd3zw8Bqg1xhuRf1EI1y-M4ydnHi1CJYDpm_cSdcZazA-ZZKtu8QADb2czepM1bUATmA&cce=2&category=acrcp_v1_32&sig=AOD64_3aFxvyQCUNa92qdqgxGfmwNlmZtA&ctype=5&q=&nis=4&ved=2ahUKEwi2qujRpaWTAxW2yqACHTYNFgIQwg8oAXoECAkQEw&adurl=',
        stock: 25,
        rating: 4.8,
        vehicleType: 'SUV',
        specifications: '235/65 R17, Speed Rating H, Load Index 104',
        suitableModels: ['Toyota Fortuner']
    },
    {
        name: 'Ranger A/T 265/65 R17',
        brand: 'Michelin',
        category: ['All-Season'],
        roadType: ['Off-Road', 'Highway'],
        price: 10250,
        description: 'All-terrain grip for superior performance on both roads and tracks.',
        image: 'https://www.google.com/imgres?q=hd%20images%20Ranger%20A%2FT%20265%2F65%20R17&imgurl=https%3A%2F%2Fmmkriepas.lv%2Fwp-content%2Fuploads%2F2026%2F03%2F23565r17-powertrac-wildranger-at-108t-3pmsf-all-terrain-riepas-vasaras-riepas-300x300.jpg&imgrefurl=https%3A%2F%2Fmmkriepas.lv%2Fen%2Ftyres%2Fall-season-tyres%2F265-65-r17%2Fpage%2F2%2F&docid=hhFOlx17-EMsvM&tbnid=8SuLvYnkw3UxBM&vet=12ahUKEwjf-amCpaWTAxWEi2MGHTlpEhIQnPAOegQIKRAB..i&w=300&h=300&hcb=2&itg=1&ved=2ahUKEwjf-amCpaWTAxWEi2MGHTlpEhIQnPAOegQIKRAB',
        stock: 20,
        rating: 4.6,
        vehicleType: 'SUV',
        specifications: '265/65 R17, Speed Rating T, Load Index 112',
        suitableModels: ['Mahindra Thar']
    },
    {
        name: 'Ranger M/T 245/75 R16',
        brand: 'Goodyear',
        category: ['All-Season'],
        roadType: ['Off-Road'],
        price: 10950,
        description: 'Mud terrain specialist with exceptional off-road traction and stone ejector.',
        image: 'https://www.google.com/imgres?q=hd%20images%20Ranger%20M%2FT%20245%2F75%20R16&imgurl=https%3A%2F%2Fpcr.jktyre.com%2Fpublic%2Fstorage%2Fproduct%2F1626684536-ranger-mt-1.jpg&imgrefurl=https%3A%2F%2Fpcr.jktyre.com%2Fproducts%2Franger%2Franger-mt&docid=vMh-xHZahlAzBM&tbnid=dhF970AC83i5hM&vet=12ahUKEwj8loKZpaWTAxUezTgGHemxI8gQnPAOegQIExAB..i&w=480&h=700&hcb=2&ved=2ahUKEwj8loKZpaWTAxUezTgGHemxI8gQnPAOegQIExAB',
        stock: 15,
        rating: 4.9,
        vehicleType: 'SUV',
        specifications: '245/75 R16, Speed Rating Q, Load Index 120',
        suitableModels: ['Jeep Wrangler']
    },
    // Bike Tyres
    {
        name: 'Blaze BF32 90/90-17',
        brand: 'JK Tyre',
        category: ['Summer'],
        roadType: ['City'],
        price: 1850,
        description: 'Strong grip and durability for everyday city commuting.',
        image: 'https://www.google.com/imgres?q=hd%20images%20Blaze%20BF32%2090%2F90-17&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F51Avqte8FiL.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.in%2FTYRE-Blaze-BF32-Tubeless-Delivery%2Fdp%2FB07B4F12VH&docid=1YazasYvKdaIFM&tbnid=lAlKyPPpDj8iFM&vet=12ahUKEwiD94qGpqWTAxUtxTgGHVi7GaQQnPAOegQIJhAB..i&w=500&h=500&hcb=2&ved=2ahUKEwiD94qGpqWTAxUtxTgGHVi7GaQQnPAOegQIJhAB',
        stock: 80,
        rating: 4.5,
        vehicleType: 'Bike',
        specifications: '90/90-17, Tubeless, Load Index 49',
        suitableModels: ['Bajaj Pulsar']
    },
    {
        name: 'Blaze BR41 100/90-18',
        brand: 'Goodyear',
        category: ['Summer'],
        roadType: ['Highway'],
        price: 2150,
        description: 'High stability and superior control for long-distance highway cruises.',
        image: 'https://www.google.com/imgres?q=hd%20images%20Blaze%20BR41%20100%2F90-18&imgurl=https%3A%2F%2Frukminim2.flixcart.com%2Fimage%2F180%2F240%2Fxif0q%2Ftwo-wheeler-tyre%2Fp%2Fc%2F1%2Fr-blaze-rydr-br43-tubeless-bike-tyre-rear-359-tube-less-140-70-original-imah3d3e3ztqfzuy.jpeg%3Fq%3D90&imgrefurl=https%3A%2F%2Fwww.flipkart.com%2Fjk-tyre-blaze-rydr-bf41-tubeless-90-90-18-front-two-wheeler%2Fp%2Fitma48c50e8a0482&docid=m2s9bQc-18x39M&tbnid=lX1nPc2-6DDWzM&vet=12ahUKEwjKuoilpqWTAxVJzjgGHaZ2HCQQnPAOegQIJhAB..i&w=163&h=240&hcb=2&itg=1&ved=2ahUKEwjKuoilpqWTAxVJzjgGHaZ2HCQQnPAOegQIJhAB',
        stock: 70,
        rating: 4.7,
        vehicleType: 'Bike',
        specifications: '100/90-18, Tubeless, Load Index 56',
        suitableModels: ['Royal Enfield']
    },
    {
        name: 'Jet X 80/100-18',
        brand: 'Bridgestone',
        category: ['Summer'],
        roadType: ['City'],
        price: 1450,
        description: 'Long life and dependable performance for commuters.',
        image: 'https://www.google.com/imgres?q=hd%20images%20Jet%20X%2080%2F100-18&imgurl=https%3A%2F%2Fimages.jdmagicbox.com%2Fquickquotes%2Fimages_main%2Fmtc1mde0mdc3oa-1750140778-rmpu0zd7.jpg&imgrefurl=https%3A%2F%2Fwww.justdial.com%2Fjdmart%2FSatna%2FRALCO-80%252A100-18-REAR-TUBELESS-TYRE-FOR-BIKE%2Fpid-2231052920%2F9999P7672-7672-230118224430-L8L3&docid=BWnpYmbPZETvgM&tbnid=FIjNgTeqOTTWlM&vet=12ahUKEwjiqbrOpqWTAxW1a2wGHTioJtAQnPAOegQIIRAB..i&w=2048&h=2004&hcb=2&itg=1&ved=2ahUKEwjiqbrOpqWTAxW1a2wGHTioJtAQnPAOegQIIRAB',
        stock: 100,
        rating: 4.4,
        vehicleType: 'Bike',
        specifications: '80/100-18, Tube Type, Load Index 47',
        suitableModels: ['Hero Splendor']
    },
    // Truck Tyres
    {
        name: 'Jet Steel JDH XM 295/90 R20',
        brand: 'Continentale',
        category: ['All-Season'],
        roadType: ['Highway'],
        price: 25500,
        description: 'Heavy load capacity and durability for long-haul transport trucks.',
        image: 'https://www.google.com/imgres?q=hd%20images%20Jet%20Steel%20JDH%20XM%20295%2F90%20R20&imgurl=https%3A%2F%2Fimages.jdmagicbox.com%2Fquickquotes%2Fimages_main%2Fdurable-e-rickshaw-tyre-500mm-designed-for-agricultural-implement-traction-803303580-2ddupjig.jpg&imgrefurl=https%3A%2F%2Fwww.justdial.com%2Fjdmart%2FVadodara%2FJK-JETSTEEL-JDH-XM-Commercial-Truck-Tyre-29590R20%2Fpid-2227286706%2F0265PX265-X265-181127170643-F7G3&docid=qY30V2fxPX8GVM&tbnid=3nGEemAyHFwnZM&vet=12ahUKEwjw3ajxpqWTAxVxXGwGHRkXIz4QnPAOegQIHxAB..i&w=664&h=498&hcb=2&ved=2ahUKEwjw3ajxpqWTAxVxXGwGHRkXIz4QnPAOegQIHxAB',
        stock: 15,
        rating: 4.8,
        vehicleType: 'Truck',
        specifications: '295/90 R20, Radial, Ply Rating 16 PR',
        suitableModels: ['Long Haul Trucks']
    },
    {
        name: 'Jetway JUC XM 10.00 R20',
        brand: 'Continental',
        category: ['All-Season'],
        roadType: ['Highway', 'City'],
        price: 22500,
        description: 'High durability and excellent retreadability for cargo trucks.',
        image: 'https://www.google.com/imgres?q=hd%20images%20Jetway%20JUC%20XM%2010.00%20R20&imgurl=https%3A%2F%2Fimages.jdmagicbox.com%2Fquickquotes%2Fimages_main%2Fjk-eg-04-dx-off-the-road-tyre-14-00-24-16-pr-t-t-2227287308-wwc1wtwq.png&imgrefurl=https%3A%2F%2Fwww.justdial.com%2Fjdmart%2FVadodara%2FJK-JETWAY-JUC-XM-Commercial-Truck-Tyre-29590R20%2Fpid-2227286803%2F0265PX265-X265-181127170643-F7G3&docid=-zXWkbiixU5RSM&tbnid=gR-q52veSzcKEM&vet=12ahUKEwjS9YWbp6WTAxWzR2wGHZmrHf4QnPAOegQIXxAB..i&w=500&h=650&hcb=2&ved=2ahUKEwjS9YWbp6WTAxWzR2wGHZmrHf4QnPAOegQIXxAB',
        stock: 20,
        rating: 4.7,
        vehicleType: 'Truck',
        specifications: '10.00 R20, Radial, Ply Rating 16 PR',
        suitableModels: ['Cargo Trucks']
    },
    {
        name: 'Jet Steel JDM 11.00 R20',
        brand: 'Bridgestone',
        category: ['All-Season'],
        roadType: ['Highway'],
        price: 27500,
        description: 'Better mileage and optimized tread design for highway transport.',
        image: 'https://www.google.com/imgres?q=hd%20images%20Jet%20Steel%20JDM%2011.00%20R20&imgurl=https%3A%2F%2Fdwzytf8fljslz.cloudfront.net%2FLoader_Champ_30_ai_copy_f1fffcc9c6.png&imgrefurl=https%3A%2F%2Fwww.jktyre.com%2Fotr%2Fearth-mover%2Ftyre-details%2Fjet-steel-jdo-xd&docid=W5Q79zJ8XoANnM&tbnid=795wW-Gp7AuTJM&vet=12ahUKEwjFnuzMp6WTAxWZR2wGHXziMg0QnPAOegQIFhAB..i&w=1509&h=1914&hcb=2&ved=2ahUKEwjFnuzMp6WTAxWZR2wGHXziMg0QnPAOegQIFhAB',
        stock: 12,
        rating: 4.9,
        vehicleType: 'Truck',
        specifications: '11.00 R20, Radial, Ply Rating 18 PR',
        suitableModels: ['Highway Transport']
    }
];

const seedJKTyres = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');

        // Clean slate for migration
        await Product.deleteMany({});
        console.log('Existing products cleared');

        await Product.insertMany(jkTyres);
        console.log('JK Tyres seeded successfully with all details!');

        process.exit();
    } catch (error) {
        console.error('Error seeding data: ', error);
        process.exit(1);
    }
};

seedJKTyres();
