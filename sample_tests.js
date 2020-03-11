let sample_tests = {
    "Complete Blood Count (CBC)": [
        //https://www.mayoclinic.org/tests-procedures/complete-blood-count/about/pac-20384919
        {
            testValue: "Red Blood Cell Count",
            range: "4.35-5.65",
            units: "cells/L",
            type: "number",

        },
        {
            testValue: "Hemoglobin",
            range: "13.2-16.6",
            units: "grams/dL",
            type: "number",

        },
        {
            testValue: "Hematocrit",
            range: "38.3-48.6",
            units: "percent",
            type: "number",

        },
        {
            testValue: "White blood cell count",
            range: "3.4-9.6",
            units: "billion cells/L",
            type: "number",

        },
        {
            testValue: "Platelet count",
            range: "135-317",
            units: "billion/L",
            type: "number",

        },
        {
            testValue: "Platelets",
            range: "150,000 to 450,000",
            units: "platelets/mcL",
            type: "number",

        },
    ],
    "Chem 7 - Glu R,Urea,Crea,Lytes": [
        //https://www.ucsfbenioffchildrens.org/tests/003462.html
        {
            testValue: "BUN",
            range: "7-20",
            units: "mg/dL",
            type: "number",
        },
        {
            testValue: "CO2",
            range: "20 to 29",
            units: "mmol/L",
            type: "number",
        },
        {
            testValue: "Creatinine",
            range: "0.8 to 1.4",
            units: "mg/dL",
            type: "number",
        },
        {
            testValue: "Glucose",
            range: "64 to 128",
            units: "mg/dL",
            type: "number",
        },
        {
            testValue: "Serum chloride",
            range: "101 to 111",
            units: "mmol/L",
            type: "number",
        },
        {
            testValue: "Serum potassium",
            range: "3.7 to 5.2",
            units: "mEq/L",
            type: "number",
        },
        {
            testValue: "Serum sodium",
            range: "136 to 144",
            units: "mEq/L",
            type: "number",
        },
    ],
    "Chem 6 - Urea,Crea,Lytes": [
        //https://www.ucsfbenioffchildrens.org/tests/003462.html
        {
            testValue: "BUN",
            range: "7-20",
            units: "mg/dL",
            type: "number",
        },
        {
            testValue: "CO2",
            range: "20 to 29",
            units: "mmol/L",
            type: "number",
        },
        {
            testValue: "Glucose",
            range: "64 to 128",
            units: "mg/dL",
            type: "number",
        },
        {
            testValue: "Serum chloride",
            range: "101 to 111",
            units: "mmol/L",
            type: "number",
        },
        {
            testValue: "Serum potassium",
            range: "3.7 to 5.2",
            units: "mEq/L",
            type: "number",
        },
        {
            testValue: "Serum sodium",
            range: "136 to 144",
            units: "mEq/L",
            type: "number",
        },
    ],
    "Liver Function Tests (LFT)": [
        //https://geekymedics.com/interpretation-of-liver-function-tests-lfts/
        {
            testValue: "ALT",
            range: "3-40",
            units: "iu/l",
            type: "number",
        },
        {
            testValue: "AST",
            range: "3-30",
            units: "iu/l",
            type: "number",
        },
        {
            testValue: "ALP",
            range: "30-100",
            units: "umol/l",
            type: "number",
        },
        {
            testValue: "GGT",
            range: "8-60",
            units: "u/l",
            type: "number",
        },
        {
            testValue: "Bilirubin",
            range: "3-17",
            units: "umol/l",
            type: "number",
        },
        {
            testValue: "Albumin",
            range: "35-50",
            units: "g/l",
            type: "number",
        },
        {
            testValue: "PT",
            range: "10-14",
            units: "s/1",
            type: "number",
        },
    ],
    "Magnesium": [
        //https://medlineplus.gov/ency/article/003487.htm
        {
            testValue: "Magnesium",
            range: "1.7 to 2.2",
            units: "mg/dL",
            type: "number",
        }

    ],
    "Phosphorus (Phosphate)": [
        //https://medlineplus.gov/ency/article/003487.htm
        {
            testValue: "Phosphorus",
            range: "3.4 to 4.5",
            units: "mg/dl",
            type: "number",
        }

    ],

    "Lipase": [
        //https://www.healthline.com/health/amylase-and-lipase-tests#normal-amylase-and-lipase
        {
            testValue: "Lipase",
            range: "0-160",
            units: "U/L",
            type: "number",
        }

    ],

    "C-Reactive Protein (CRP)": [
        //https://www.healthline.com/health/amylase-and-lipase-tests#normal-amylase-and-lipase
        {
            testValue: "C-Reactive Protein (CRP)",
            range: "0-2.0",
            units: "mg/L",
            type: "number",
        }

    ],

    "Ionized Calcium Profile": [
        //https://www.healthline.com/health/calcium-ionized
        {
            testValue: "Ionized Calcium Profile",
            range: "4.64-5.28",
            units: "mg/dL",
            type: "number",
        }

    ],

    "Urine Protein Electrph Random": [
        //https://www.healthline.com/health/protein-electrophoresis-urine#what-the-test-measures
        {
            testValue: "Albumin",
            range: "0-5",
            units: "mg/dL",
            type: "number",
        }

    ],

    "Alanine Aminotransferase": [
        //https://www.healthline.com/health/alt#results
        {
            testValue: "males",
            range: "29-33",
            units: "IU/L",
            type: "number",
        },

        {
            testValue: "females",
            range: "19-25",
            units: "IU/L",
            type: "number",
        }

    ],

    "Troponin I": [
        //https://www.medicalnewstoday.com/articles/325415
        {
            testValue: "Troponin I",
            range: "0-0.04",
            units: "ng/mL",
            type: "number",
        }

    ],

    "Blood Gas, Arterial (ABG)": [
        //https://nurse.org/articles/arterial-blood-gas-test/
        {
            testValue: "pH",
            range: "7.35-7.45",
            units: "pH",
            type: "number",
        },

        {
            testValue: "Partial pressure of oxygen (PaO2)",
            range: "75-100",
            units: "mmHg",
            type: "number",
        },
        {
            testValue: "Partial pressure of carbon dioxide (PaCO2)",
            range: "35-45",
            units: "mmHg",
            type: "number",
        },
        {
            testValue: "Bicarbonate (HCO3)",
            range: "22-26",
            units: "mEq/L",
            type: "number",
        },
        {
            testValue: "Oxygen saturation (O2 Sat)",
            range: "94-100",
            units: "%",
            type: "number",
        },


    ],


    "Partial Thromboplastin Time": [
        //https://emedicine.medscape.com/article/2085837-overview
        {
            testValue: "PTT",
            range: "30-40",
            units: "mg/seconds",
            type: "number",
        }

    ],

    Ultrasonography: [
        {
            //https://prod-images-static.radiopaedia.org/images/25099401/6aac3629afeb3f902dc08d23552960_big_gallery.jpeg
            title: "Abdomen",
            link: "abdomenUltrasonography.jpg",
            type: "image",
        },

        {
            //https://i.ytimg.com/vi/UN4SN43I_6A/maxresdefault.jpg
            title: "DoppLowExtrVenBilat/scan",
            link: "doppUltrasonography.jpg",
            type: "image",
        },
    ],
    CT: [

        {
            //https://usercontent2.hubstatic.com/7980649_f1024.jpg
            title: "AbdomenPelvisContrast",
            link: "AbdomenPelvisContrastCT.jpg",
            type: "image",
        },

        {
            //https://prod-images-static.radiopaedia.org/images/2555541/485d8d8f4ddd22594b0c38f6311030_big_gallery.jpg
            title: "AbdoPelvisRenalColic(KUB)",
            link: "KUBCT.jpg",
            type: "image",
        },

        {
            //https://www.researchgate.net/profile/Evan_Stein/publication/41111706/figure/fig2/AS:601807558549512@1520493511299/Pulmonary-CT-angiography-image-in-43-year-old-woman-shows-acute-pulmonary-embolism.png
            title: "AngioThoraxContrast(Pulm)",
            link: "PulmCT.jpg",
            type: "image",
        },

        {
            //https://www.researchgate.net/publication/276127752/figure/fig2/AS:622287246082054@1525376249540/A-Left-upper-extremity-CT-angiography-with-contrast-axial-view-The-PSA-as-seen-on.png
            title: "ExtremityUpperLt",
            link: "ExtremityUpperLtCT.jpg",
            type: "image",
        },




    ],

    Radiography: [
        {
            //https://prod-images-static.radiopaedia.org/images/12258306/04f95b7eb3af1bbaefacdfc084cc61_gallery.jpg
            title: "AbdomenMultiViews",
            link: "AbdomenMultiViewsRadiography.jpg",
            type: "image",
        },

        {
            //https://owqo93fpiuc4633lp1zthz57-wpengine.netdna-ssl.com/wp-content/uploads/sites/11/2018/12/123017orthodxfigure1_1349059-860x574.jpg
            title: "Chest Portable",
            link: "ChestPortableRadiography.jpg",
            type: "image",
        },

        {
            //https://prod-images-static.radiopaedia.org/images/157210/332aa0c67cb2e035e372c7cb3ceca2_jumbo.jpg
            title: "Chest (CXR)",
            link: "CXRRadiography.jpg",
            type: "image",
        },

        {
            //https://prod-images-static.radiopaedia.org/images/157210/332aa0c67cb2e035e372c7cb3ceca2_jumbo.jpg
            title: "Skeletal Survey Routine",
            link: "SkeletalSurveyRoutineRadiography.jpg",
            type: "image",
        },

        {
            //https://prod-images-static.radiopaedia.org/images/133697/86c1f2821cf7b547d33ecd2f55f94e_jumbo.jpg
            title: "Shoulder Lt",
            link: "ShoulderLtRadiography.jpg",
            type: "image",
        },

        {
            //https://upload.orthobullets.com/question/666/images/3parta.jpg
            title: "Humerus Lt",
            link: "HumerusLtRadiography.jpg",
            type: "image",
        },

        {
            //https://upload.orthobullets.com/question/666/images/3parta.jpg
            title: "Fluoro Upper Ext Lt Specialist",
            link: "FluoroUpperExtLtSpecialistRadiography.jpg",
            type: "image",
        },
    ],
}