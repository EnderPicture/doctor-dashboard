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
            range: "150000-450000",
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
            range: "20-29",
            units: "mmol/L",
            type: "number",
        },
        {
            testValue: "Creatinine",
            range: "0.8-1.4",
            units: "mg/dL",
            type: "number",
        },
        {
            testValue: "Glucose",
            range: "64-128",
            units: "mg/dL",
            type: "number",
        },
        {
            testValue: "Serum chloride",
            range: "101-111",
            units: "mmol/L",
            type: "number",
        },
        {
            testValue: "Serum potassium",
            range: "3.7-5.2",
            units: "mEq/L",
            type: "number",
        },
        {
            testValue: "Serum sodium",
            range: "136-144",
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
            range: "20-29",
            units: "mmol/L",
            type: "number",
        },
        {
            testValue: "Glucose",
            range: "64-128",
            units: "mg/dL",
            type: "number",
        },
        {
            testValue: "Serum chloride",
            range: "101-111",
            units: "mmol/L",
            type: "number",
        },
        {
            testValue: "Serum potassium",
            range: "3.7-5.2",
            units: "mEq/L",
            type: "number",
        },
        {
            testValue: "Serum sodium",
            range: "136-144",
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
            range: "1.7-2.2",
            units: "mg/dL",
            type: "number",
        }

    ],
    "Phosphorus (Phosphate)": [
        //https://medlineplus.gov/ency/article/003487.htm
        {
            testValue: "Phosphorus",
            range: "3.4-4.5",
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
            testValue: "CRP",
            range: "0-2.0",
            units: "mg/L",
            type: "number",
        }

    ],

    "Ionized Calcium Profile": [
        //https://www.healthline.com/health/calcium-ionized
        {
            testValue: "ICP",
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

    "Alkaline Phosphatase": [
        //https://www.healthline.com/health/alp
        {
            testValue: "SerumALP",
            range: "20-140",
            units: "IU/L",
            type: "number",
        }

    ],

    "AST (SGOT)": [
        //https://www.healthline.com/health/alt#results
        {
            testValue: "AST (SGOT)",
            range: "5-40",
            units: "IU/L",
            type: "number",
        }

    ],


    "Bilirubin, Total": [
        //https://www.mayoclinic.org/tests-procedures/bilirubin/about/pac-20393041
        {
            testValue: "Bilirubin, Total",
            range: "1.15-1.25",
            units: "mg/dL",
            type: "number",
        }

    ],

    "Gamma Glutamyl Transferase": [
        //https://www.mayoclinic.org/tests-procedures/bilirubin/about/pac-20393041
        {
            testValue: "Gamma Glutamyl Transferase",
            range: "1.15-1.25",
            units: "mg/dL",
            type: "number",
        }

    ],

    "Alanine Aminotransferase": [
        //https://www.healthline.com/health/alt#results
        {
            testValue: "Alanine Aminotransferase",
            range: "29-33",
            units: "IU/L",
            type: "number",
        },
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
            testValue: "PaO2",
            range: "75-100",
            units: "mmHg",
            type: "number",
        },
        {
            testValue: "PaCO2",
            range: "35-45",
            units: "mmHg",
            type: "number",
        },
        {
            testValue: "HCO3",
            range: "22-26",
            units: "mEq/L",
            type: "number",
        },
        {
            testValue: "O2 Sat",
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

    "Abdomen Ultrasonography": [
        {
            //https://prod-images-static.radiopaedia.org/images/25099401/6aac3629afeb3f902dc08d23552960_big_gallery.jpeg
            link: "abdomenUltrasonography.jpg",
            type: "image",
            foundReport: "no",
            //https://medlineplus.gov/ency/article/003777.htm
            notes: "Abdominal ultrasound is a type of imaging test. It is used to look at organs in the abdomen, including the liver, gallbladder, spleen, pancreas, and kidneys. The blood vessels that lead to some of these organs, such as the inferior vena cava and aorta, can also be examined with ultrasound."

        },
    ],

    "Dopp Low Extr Ven Bilat/scan": [
        {
            //https://i.ytimg.com/vi/UN4SN43I_6A/maxresdefault.jpg
            link: "doppUltrasonography.jpg",
            type: "image",
            foundReport: "no",
            //https://www.memorialcare.org/services/diagnostic/venous-duplex-scan
            notes: "Venous duplex scan is a painless exam that uses high-frequency sound waves (ultrasound) to capture images of internal views of veins that return blood to the heart. During an upper extremity venous duplex scan, the veins in your neck, shoulders, arms and wrists are viewed. During a lower extremity venous duplex scan, the veins in the legs and ankles are viewed."

        },
    ],

    "Abdomen Pelvis Contrast": [


        {
            //https://usercontent2.hubstatic.com/7980649_f1024.jpg
            link: "AbdomenPelvisContrastCT.jpg",
            type: "image",
            //https://usarad.com/pdf/CT/CT%20ABDOMEN%20AND%20PELVIS%20W%20CONTRAST.pdf
            foundReport: "yes",
            notes: "There is evidence of diffuse hepatic hypoattenuation compatible with fatty infiltration. There is no intra or extrahepatic biliary ductal dilatation. The patient is status post cholecystectomy. The spleen is normal. The pancreas is of normal contour and attenuation characteristics. There is no evidence of adrenal mass. Moderate sized fat containing supraumbilical hernia is present. The kidneys are normal in size, shape and configuration. No renal or ureteral calculi are identified. There is no hydroureter or hydronephrosis. There is no evidence for appendicitis. Several fluid-filled loops of small bowel are present compatible with mild enteritis. There is no bowel wall thickening. No evidence for small or large bowel obstruction. There is no evidence of abdominal ascites or lymphadenopathy. There is no evidence of intrinsic or extrinsic bladder mass. There is no pelvic ascites or lymphadenopathy."

        },
    ],
    "Abdo Pelvis Renal Colic (KUB)": [


        {
            //https://prod-images-static.radiopaedia.org/images/2555541/485d8d8f4ddd22594b0c38f6311030_big_gallery.jpg
            link: "KUBCT.jpg",
            type: "image",
            foundReport: "no",
            //https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5443345/
            notes: "Kidney stone imaging is an important diagnostic tool and initial step in deciding which therapeutic options to use for the management of kidney stones. Guidelines provided by the American College of Radiology, American Urological Association, and European Association of Urology differ regarding the optimal initial imaging modality to use to evaluate patients with suspected obstructive nephrolithiasis. Noncontrast CT of the abdomen and pelvis consistently provides the most accurate diagnosis but also exposes patients to ionizing radiation. Traditionally, ultrasonography has a lower sensitivity and specificity than CT, but does not require use of radiation. However, when these imaging modalities were compared in a randomized controlled trial they were found to have equivalent diagnostic accuracy within the emergency department. Both modalities have advantages and disadvantages. Kidney, ureter, bladder (KUB) plain film radiography is most helpful in evaluating for interval stone growth in patients with known stone disease, and is less useful in the setting of acute stones. MRI provides the possibility of 3D imaging without exposure to radiation, but it is costly and currently stones are difficult to visualize. Further developments are expected to enhance each imaging modality for the evaluation and treatment of kidney stones in the near future. A proposed algorithm for imaging patients with acute stones in light of the current guidelines and a randomized controlled trial could aid clinicians."


        },
    ],
    "Angio Thorax Contrast (Pulm)": [

        {
            //https://www.researchgate.net/profile/Evan_Stein/publication/41111706/figure/fig2/AS:601807558549512@1520493511299/Pulmonary-CT-angiography-image-in-43-year-old-woman-shows-acute-pulmonary-embolism.png
            link: "PulmCT.jpg",
            type: "image",
            //https://www.mtsamples.com/site/pages/sample.asp?Type=95-Radiology&Sample=1521-Chest%20Pulmonary%20Angio
            foundReport: "yes",
            notes: "As seen on the prior examination, there is a very large heterogeneous right chest wall mass, which measures at least 10 x 12 cm based on axial image #35. Just superior to the mass is a second heterogeneous focus of neoplasm measuring about 5 x 3.3 cm. Given the short interval time course from the prior exam, dated 01/23/09, this finding has not significantly changed. However, there is considerable change in the appearance of the lung fields. There are now bilateral pleural effusions, small on the right and moderate on the left with associated atelectasis. There are also extensive right lung consolidations, all new or increased significantly from the prior examination. Again identified is a somewhat spiculated region of increased density at the right lung apex, which may indicate fibrosis or scarring, but the possibility of primary or metastatic disease cannot be excluded. There is no pneumothorax in the interval. On the mediastinal windows, there is presumed subcarinal adenopathy, with one lymph node measuring roughly 12 mm suggestive of metastatic disease here. There is aortic root and arch and descending thoracic aortic calcification. There are scattered regions of soft plaque intermixed with this. The heart is not enlarged. The left axilla is intact in regards to adenopathy. The inferior thyroid appears unremarkable. Limited assessment of the upper abdomen discloses a region of lower density within the right hepatic lobe, this finding is indeterminate, and if there is need for additional imaging in regards to hepatic metastatic disease, follow up ultrasound. Spleen, adrenal glands, and upper kidneys appear unremarkable. Visualized portions of the pancreas are unremarkable. There is extensive rib destruction in the region of the chest wall mass. There are changes suggesting prior trauma to the right clavicle."
        },

    ],
    "Extremity Upper Lt": [


        {
            //https://www.researchgate.net/publication/276127752/figure/fig2/AS:622287246082054@1525376249540/A-Left-upper-extremity-CT-angiography-with-contrast-axial-view-The-PSA-as-seen-on.png
            link: "ExtremityUpperLtCT.jpg",
            type: "image",
            foundReport: "no",
            //https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6732118/
            notes: "Imaging is needed for diagnosis, treatment planning, and follow-up of patients with pathologies affecting upper extremity vasculature. With growth and evolution of imaging modalities [especially CT angiography (CTA) and MR angiography (MRA)], there is need to recognize the advantages and disadvantages of various modalities and obtain the best possible imaging diagnostic test. Understanding various limitations and pitfalls as well as the best practices to minimize and manage these pitfalls is very important for the diagnosis. This article reviews the upper extremity arterial vascular anatomy, discusses the CTA and MRA imaging, various pitfalls, and challenges and discuss imaging manifestations of upper extremity arterial pathologies."

        },

    ],

    "Abdomen Multi Views": [
        {
            //https://prod-images-static.radiopaedia.org/images/12258306/04f95b7eb3af1bbaefacdfc084cc61_gallery.jpg
            link: "AbdomenMultiViewsRadiography.jpg",
            type: "image",
            foundReport: "no",
            //https://www.hopkinsmedicine.org/health/treatment-tests-and-therapies/abdominal-x-ray
            notes: "Abdominal X-rays may be used to diagnose causes of abdominal pain. These can include things such as masses, holes in the intestine, or blockages. Abdominal X-rays may be done before other tests that look at the GI tract or urinary tract. These include an abdominal CT scan and renal or kidney tests."

        },
    ],
    "Chest Portable": [

        {
            //https://owqo93fpiuc4633lp1zthz57-wpengine.netdna-ssl.com/wp-content/uploads/sites/11/2018/12/123017orthodxfigure1_1349059-860x574.jpg
            link: "ChestPortableRadiography.jpg",
            type: "image",
            //https://www.ajronline.org/doi/10.2214/AJR.09.7170
            foundReport: "yes",
            notes: "The initial chest radiograph showed slight widening of the mediastinum. A subsequent chest radiograph showed progressive widening of the mediastinum, worsening interstitial edema, and increased pleural effusions. Chest CT revealed a high-attenuation collection in the mediastinum located to the right of the ascending aortic graft."

        },
    ],
    "Chest (CXR)": [

        {
            //https://prod-images-static.radiopaedia.org/images/157210/332aa0c67cb2e035e372c7cb3ceca2_jumbo.jpg
            link: "CXRRadiography.jpg",
            type: "image",
            //https://www.researchgate.net/figure/An-example-of-OpenI-2-chest-x-ray-image-report-and-annotations_fig1_301837242
            foundReport: "yes",
            notes: "Both lungs are clear and expanded with no infiltrates. Basilar focal atelectasis is present in the lingula. Heart size normal. Calcified right hilar XXXX are present."
        },
    ],
    "Skeletal Survey Routine": [

        {
            //https://prod-images-static.radiopaedia.org/images/157210/332aa0c67cb2e035e372c7cb3ceca2_jumbo.jpg
            link: "SkeletalSurveyRoutineRadiography.jpg",
            type: "image",
            foundReport: "no",
            //https://www.verywellhealth.com/skeletal-survey-4685302
            notes: "A skeletal survey may be performed to investigate known or suspected physical abuse in children, to look for congenital abnormalities of the skeleton, or to look for bone disease in patients with known or suspected cancer. Skeletal surveys are often used in adults with suspected multiple myeloma to look for bone involvement."

        },
    ],

    "Shoulder Lt": [

        {
            //https://prod-images-static.radiopaedia.org/images/133697/86c1f2821cf7b547d33ecd2f55f94e_jumbo.jpg
            link: "ShoulderLtRadiography.jpg",
            type: "image",
            foundReport: "no",
            //https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3698891/
            notes: "Shoulder ultrasound is consistently used in the assessment of rotator cuff and is as accurate as magnetic resonance imaging in the detection of rotator cuff tear. It can be used as a focused examination providing rapid, real-time diagnosis, and treatment in desired clinical situations. This article presents a simplified approach to scanning and image-guided intervention, and discusses common sonographically apparent shoulder pathologies."

        },
    ],
    "Humerus Lt": [

        {
            //https://upload.orthobullets.com/question/666/images/3parta.jpg
            link: "HumerusLtRadiography.jpg",
            type: "image",
            foundReport: "no",
            //https://www.appliedradiology.com/articles/mri-of-the-shoulder-rotator-cuff
            notes: "Knowledge of the RC tendinous insertions onto the proximal humerus, an area known as the rotator cuff footprint, makes it easier to determine the extent and location of abnormality. Much has been written recently about the anatomy of distal RC tendons as they interdigitate to insert upon the 3 facets of the greater tuberosity (superior, middle, and inferior), although their location and insertion appear somewhat more arbitrary by MR imaging. Standard landmarks and techniques used in MRI to demarcate the tendons will be elaborated upon later."

        },
    ],
    "Fluoro Upper Ext Lt Specialist": [


        {
            //https://upload.orthobullets.com/question/666/images/3parta.jpg
            link: "FluoroUpperExtLtSpecialistRadiography.jpg",
            type: "image",
            foundReport: "no",
            //https://www.hopkinsmedicine.org/health/treatment-tests-and-therapies/upper-gastrointestinal-series
            notes: "Fluoroscopy is often used during an upper GI series. Fluoroscopy is a study of moving body structures — similar to an X-ray movie. A continuous X-ray beam is passed through the body part being examined, and is transmitted to a TV-like monitor so that the body part and its motion can be seen in detail. In an upper GI series, fluoroscopy allows the radiologist to see the movement of the barium through the esophagus, stomach, and duodenum as a person drinks."

        },
    ],
}