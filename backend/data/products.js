const products =[
    {
        name : "AleoVera",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk_5GHW1Ms3ftphhuoMu_aE8Ge2oYTOIb0Dw&usqp=CAU",
        description:"L'aloé vera est une plante d'intérieur décorative, facile d'entretien et peu exigeante tout au long de l'année. Elle es utilisée pour ses vertus médicinales. ",
        price: 6,
        countInStock:50,
    },
   {
        name : "Jasmin",
        imageUrl: "https://www.landi.ch/ImageOriginal/Img/product/004/661/04661_jasmin-bluehend-weiss-p10-5-cm_04661_1.jpg?width=1600&height=1600&mode=pad&bgcolor=fff",
        description:"Le jasmin est, avec la rose, pour ce qui est des espèces odorantes et capiteuses, une des deux fleurs reines de la parfumerie",
        price: 10,
        countInStock:20,
    },

    {
        name : "Menthe",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQpWr1kyJbTrB6bfYL3jvsruj-bKKhUL89-Q&usqp=CAU",
        description:"La menthe est une plante herbacée vivace, originaire d'Europe, appartenant à la famille des Lamiacées (ou Labiées). Ses feuilles sont persistantes, et elle atteint une hauteur variant de quelques centimètres à près d'un mètre, selon les espèces. ",
        price: 2,
        countInStock:100,
    },
   {
        name : "Romarin",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFA6HnMFdrUIIocaltOymMZdCm-gmP_4bwvA&usqp=CAU",
        description:"Le romarin convient également comme défatigant, pour stimuler les personnes qui souffrent d'asthénie, tout en agissant préventivement contre l'insomnie. ",
        price: 7,
        countInStock:30,
    },
    {
        name : "Oiseaux de Paradis",
        imageUrl: "https://i2.wp.com/jardinierparesseux.com/wp-content/uploads/2020/08/200901k-hejoyofplants.co_.uk_..jpg?resize=950%2C1160&ssl=1",
        description:"Strelitzia est un genre de plantes ornementales de la famille des Strelitziaceae. Son nom honore la mémoire de la reine Charlotte d'Angleterre, née duchesse de Mecklembourg-Strelitz.",
        price: 30,
        countInStock:50,
    },
    {
        name : "Citronnelle",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8EKo_pcUf4R-JbE9FuxeV0Wdovg_ID1R8YQ&usqp=CAU",
        description:"La Citronnelle ou Verveine des Indes, est une espèce de plantes herbacées tropicales de la famille des Poacées, cultivée pour ses tiges et feuilles aux qualités aromatiques",
        price: 9,
        countInStock:35,
    },
    {
        name : "Basilic",
        imageUrl: "https://www.quandarrosermaplante.com/wp-content/uploads/2019/07/basilic-en-pot.jpg",
        description:"Le Basilic ou Basilic romain est une espèce de plantes herbacées thérophytes de la famille des Lamiacées, cultivée comme plante aromatique et condimentaire. La plante est parfois appelée Basilic commun, Basilic aux sauces, Herbe royale ou Grand Basilic.",
        price: 3,
        countInStock:25,
    },
    {
        name : "lavande",
        imageUrl: "data:image/jpeg;base64,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",
        description:"Lavandula est un genre de plantes de la famille des Lamiaceae. Ce sont des arbrisseaux dicotylédones, à fleurs le plus souvent mauves ou violettes disposées en épis, dont la plupart des espèces très odorantes, sont largement utilisées dans toutes les branches de la parfumerie, en particulier le lavandin.",
        price: 8,
        countInStock:60,
    },
    {
        name : "géranium",
        imageUrl: "https://www.boutique.bencheikhgarden.tn/308-home_default/geranium-lierre.jpg",
        description:"Le géranium est une plante rustique, dont certaines variétés peuvent être persistantes, donnant des fleurs blanches ou roses de l'été jusqu'à l'automne. Les feuilles sont rondes à marge festonnée et dégagent une odeur de pomme pour la variété odoratissimum, et de rose pour la variété roseum.",
        price:10,
        countInStock:40,
    },
    {
        name : "Glaieul",
        imageUrl: "https://www.fabre-graines.com/globalflexit/images/img_base/boutique_article/4130/1920_1080_1_11801-glaieuls-nains.jpg",
        description:"Les glaïeuls appartiennent à un genre de plantes de la famille des Iridacées, le genre Gladiolus qui compte plus de 260 espèces.",
        price:30,
        countInStock:35,
    },
    {
        name : "jacinthe",
        imageUrl: "https://www.jardiner-malin.fr/wp-content/uploads/2015/01/Jacinthe.jpg",
        description:"Plantez de préférence vos jacinthes à l’automne à 10 cm de profondeur, pour une floraison au printemps.Les jacinthes sont plus belles groupées en massif.Il faut pour cela planter les bulbes par groupe en les espaçant de 10-15 cm.",
        price: 15,
        countInStock:25,
    },
    {
        name : "Amerilyse",
        imageUrl: "https://cdn.jacques-briant.fr/9465-large_default/colibriant-3-amaryllis-sonatini-1-eyecatcher-1-pink-rascal-1-ratatouille.jpg",
        description:"L'amaryllis est un des plus gros bulbes commercialisés et est généralement proposé en automne pour le forçage, afin d'obtenir une floraison hivernale. Les quatre à six corolles produites par chaque tige florale déclinent divers tons de blanc, rose, rouge, rose orangé et saumon, avec parfois des stries blanches.",
        price: 19,
        countInStock:24,
    },





];
module.exports= products;