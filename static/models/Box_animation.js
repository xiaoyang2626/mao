{
    "meta": 
    {
        "version": 1.3,
        "generator": "cgdev json exporter"
    },
    "materials": [
        {
            "name": "WireColorMat_0",
            "ambient": [1,1,1],
            "diffuse": [0.529412,0.0235294,0.0235294],
            "emissive": [0,0,0],
            "specular": [0,0,0],
            "glossiness": 0,
            "opacity": 1
        },
        {
            "name": "WireColorMat_1",
            "ambient": [1,1,1],
            "diffuse": [0.239216,0.529412,0.0235294],
            "emissive": [0,0,0],
            "specular": [0,0,0],
            "glossiness": 0,
            "opacity": 1
        }
    ],
    "model": 
    {
        "meshes": [
            {
                "meta": 
                {
                    "vertNum": 8,
                    "faceNum": 12,
                    "vertElementNum": 24
                },
                "name": "Box1",
                "node": 1,
                "verts": [-16.8814,0,16.4475,16.8814,0,16.4475,-16.8814,0,-16.4475,16.8814,0,-16.4475,-16.8814,33.2704,16.4475,16.8814,33.2704,16.4475,-16.8814,33.2704,-16.4475,16.8814,33.2704,-16.4475],
                "vertElement": 
                {
                    "vertIndices": [0,2,3,1,4,5,7,6,0,1,5,4,1,3,7,5,3,2,6,7,2,0,4,6],
                    "normals": [0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,-1,0,0,-1,0,0,-1,0,0,-1,0,0],
                    "uvs": [[1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1]]
                },
                "face": 
                {
                    "vertElementIndices": [0,1,2,2,3,0,4,5,6,6,7,4,8,9,10,10,11,8,12,13,14,14,15,12,16,17,18,18,19,16,20,21,22,22,23,20],
                    "groups": [
                        {
                            "start": 0,
                            "count": 36,
                            "materialIndex": 0
                        }
                    ]
                }
            },
            {
                "meta": 
                {
                    "vertNum": 8,
                    "faceNum": 12,
                    "vertElementNum": 24
                },
                "name": "Box2",
                "node": 2,
                "verts": [-16.8814,0,16.4475,16.8814,0,16.4475,-16.8814,0,-16.4475,16.8814,0,-16.4475,-16.8814,33.2704,16.4475,16.8814,33.2704,16.4475,-16.8814,33.2704,-16.4475,16.8814,33.2704,-16.4475],
                "vertElement": 
                {
                    "vertIndices": [0,2,3,1,4,5,7,6,0,1,5,4,1,3,7,5,3,2,6,7,2,0,4,6],
                    "normals": [0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,-1,0,0,-1,0,0,-1,0,0,-1,0,0],
                    "uvs": [[1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1]]
                },
                "face": 
                {
                    "vertElementIndices": [0,1,2,2,3,0,4,5,6,6,7,4,8,9,10,10,11,8,12,13,14,14,15,12,16,17,18,18,19,16,20,21,22,22,23,20],
                    "groups": [
                        {
                            "start": 0,
                            "count": 36,
                            "materialIndex": 1
                        }
                    ]
                }
            }
        ]
    },
    "hierarchy": 
    {
        "nodes": [
            {
                "name": "SceneRoot",
                "parent": -1,
                "pos": [0,0,0],
                "scl": [1,1,1],
                "rot": [0,0,0,1]
            },
            {
                "name": "Box1",
                "parent": 0,
                "pos": [-1.11219,0,-34.3902],
                "scl": [1,1,1],
                "rot": [0,0,0,1]
            },
            {
                "name": "Box2",
                "parent": 0,
                "pos": [-1.11219,0,22.775],
                "scl": [1,1,1],
                "rot": [0,0,0,1]
            }
        ]
    },
    "animation": 
    {
        "keyframeAnimations": [
            {
                "name": "Anim1",
                "timeline": "seconds",
                "fps": 30,
                "length": 1.66667,
                "animNodes": [
                    {
                        "nodeIndex": 0,
                        "nodeName": "SceneRoot",
                        "scl": 
                        {
                            "times": [0,1.66667],
                            "values": [1,1,1,1,1,1]
                        },
                        "pos": 
                        {
                            "times": [0,1.66667],
                            "values": [0,0,0,0,0,0]
                        },
                        "rot": 
                        {
                            "times": [0,1.66667],
                            "values": [0,0,0,1,0,0,0,1]
                        }
                    },
                    {
                        "nodeIndex": 1,
                        "nodeName": "Box1",
                        "scl": 
                        {
                            "times": [0,1.66667],
                            "values": [1,1,1,1,1,1]
                        },
                        "pos": 
                        {
                            "times": [0,0.0333333,0.0666667,0.1,0.133333,0.166667,0.2,0.233333,0.266667,0.3,0.333333,0.366667,0.4,0.433333,0.466667,0.5,0.533333,0.566667,0.6,0.633333,0.666667,0.7,0.733333,0.766667,0.8,0.833333,0.866667,0.9,0.933333,0.966667,1,1.03333,1.06667,1.1,1.13333,1.16667,1.2,1.23333,1.26667,1.3,1.33333,1.36667,1.4,1.43333,1.46667,1.5,1.53333,1.56667,1.6,1.63333,1.66667],
                            "values": [-1.11219,0,-34.3902,-1.21345,0.221572,-34.3159,-1.51174,0.874317,-34.097,-1.99887,1.94027,-33.7394,-2.66662,3.40146,-33.2493,-3.50677,5.23992,-32.6326,-4.51113,7.43769,-31.8954,-5.67147,9.97681,-31.0437,-6.9796,12.8393,-30.0835,-8.42729,16.0072,-29.0209,-10.0063,19.4626,-27.8619,-11.7086,23.1874,-26.6124,-13.5257,27.1638,-25.2786,-15.4496,31.3737,-23.8665,-17.472,35.7992,-22.3821,-19.5847,40.4223,-20.8313,-21.7795,45.225,-19.2203,-24.0482,50.1895,-17.5551,-26.3825,55.2977,-15.8416,-28.7744,60.5316,-14.086,-31.2155,65.8733,-12.2942,-33.6976,71.3049,-10.4723,-36.2126,76.8083,-8.62627,-38.7523,82.3656,-6.76216,-41.3083,87.9588,-4.88601,-43.8726,93.5701,-3.00383,-46.4368,99.1813,-1.12165,-48.9929,104.775,0.754506,-51.5325,110.332,2.61861,-54.0475,115.835,4.46463,-56.5296,121.267,6.28655,-58.9707,126.609,8.07833,-61.3626,131.842,9.83396,-63.697,136.951,11.5474,-65.9657,141.915,13.2126,-68.1605,146.718,14.8236,-70.2732,151.341,16.3744,-72.2956,155.766,17.8588,-74.2194,159.976,19.271,-76.0366,163.953,20.6048,-77.7388,167.678,21.8542,-79.3178,171.133,23.0132,-80.7655,174.301,24.0759,-82.0737,177.163,25.036,-83.234,179.702,25.8877,-84.2384,181.9,26.6249,-85.0785,183.739,27.2416,-85.7463,185.2,27.7318,-86.2334,186.266,28.0893,-86.5317,186.919,28.3083,-86.6329,187.14,28.3826]
                        },
                        "rot": 
                        {
                            "times": [0,0.0333333,0.0666667,0.1,0.133333,0.166667,0.2,0.233333,0.266667,0.3,0.333333,0.366667,0.4,0.433333,0.466667,0.5,0.533333,0.566667,0.6,0.633333,0.666667,0.7,0.733333,0.766667,0.8,0.833333,0.866667,0.9,0.933333,0.966667,1,1.03333,1.06667,1.1,1.13333,1.16667,1.2,1.23333,1.26667,1.3,1.33333,1.36667,1.4,1.43333,1.46667,1.5,1.53333,1.56667,1.6,1.63333,1.66667],
                            "values": [0,0,0,1,0.000386804,-0.000228679,0.000331796,1,0.00152542,-0.000900862,0.00131028,1,0.00338197,-0.00199375,0.00291145,0.999988,0.00592109,-0.00348215,0.00511288,0.999963,0.0091062,-0.0053388,0.00789342,0.999913,0.0128996,-0.00753473,0.0112329,0.999825,0.0172625,-0.0100395,0.0151116,0.999686,0.0221554,-0.0128215,0.0195106,0.999482,0.0275381,-0.0158483,0.0244105,0.999197,0.0333698,-0.0190869,0.0297922,0.998817,0.0396092,-0.0225038,0.0356359,0.998326,0.0462148,-0.0260655,0.0419214,0.997711,0.0531451,-0.0297387,0.0486274,0.996959,0.0603583,-0.0334904,0.0557319,0.996057,0.067813,-0.0372885,0.0632117,0.994995,0.0754683,-0.0411016,0.0710424,0.993765,0.0832835,-0.0448994,0.0791984,0.992359,0.0912188,-0.0486531,0.0876528,0.990772,0.0992353,-0.0523355,0.0963772,0.989002,0.107295,-0.0559211,0.105342,0.987048,0.115362,-0.0593864,0.114517,0.984912,0.1234,-0.06271,0.123869,0.982597,0.131377,-0.0658731,0.133367,0.980109,0.139259,-0.0688589,0.142974,0.977458,0.147017,-0.0716536,0.152658,0.974652,0.154624,-0.0742456,0.162382,0.971705,0.162052,-0.0766265,0.172109,0.968631,0.169279,-0.0787902,0.181805,0.965445,0.176282,-0.0807335,0.19143,0.962165,0.183041,-0.082456,0.20095,0.95881,0.18954,-0.0839599,0.210327,0.955399,0.195762,-0.08525,0.219525,0.951955,0.201696,-0.0863333,0.228507,0.948499,0.207329,-0.0872194,0.237237,0.945053,0.212652,-0.08792,0.245682,0.941642,0.217659,-0.0884486,0.253806,0.938288,0.222341,-0.0888205,0.261575,0.935015,0.226696,-0.0890525,0.268958,0.931848,0.23072,-0.0891626,0.275921,0.928809,0.234409,-0.0891696,0.282434,0.925922,0.237763,-0.089093,0.288465,0.923211,0.240779,-0.0889525,0.293985,0.920699,0.243455,-0.0887678,0.298963,0.918407,0.245791,-0.0885582,0.303372,0.916357,0.247783,-0.0883419,0.307183,0.91457,0.249429,-0.0881363,0.310365,0.913067,0.250723,-0.0879567,0.312892,0.911866,0.25166,-0.0878168,0.314733,0.910988,0.25223,-0.0877273,0.31586,0.910448,0.252424,-0.0876963,0.316242,0.910265]
                        }
                    },
                    {
                        "nodeIndex": 2,
                        "nodeName": "Box2",
                        "scl": 
                        {
                            "times": [0,0.0333333,0.0666667,0.1,0.133333,0.166667,0.2,0.233333,0.266667,0.3,0.333333,0.366667,0.4,0.433333,0.466667,0.5,0.533333,0.566667,0.6,0.633333,0.666667,0.7,0.733333,0.766667,0.8,0.833333,0.866667,0.9,0.933333,0.966667,1,1.03333,1.06667,1.1,1.13333,1.16667,1.2,1.23333,1.26667,1.3,1.33333,1.36667,1.4,1.43333,1.46667,1.5,1.53333,1.56667,1.6,1.63333,1.66667],
                            "values": [1,1,1,0.999207,0.999207,0.999207,0.996869,0.996869,0.996869,0.993052,0.993052,0.993052,0.987819,0.987819,0.987819,0.981236,0.981236,0.981236,0.973365,0.973365,0.973365,0.964273,0.964273,0.964273,0.954022,0.954022,0.954022,0.942677,0.942677,0.942677,0.930304,0.930304,0.930304,0.916965,0.916965,0.916965,0.902725,0.902725,0.902725,0.887649,0.887649,0.887649,0.871802,0.871802,0.871802,0.855246,0.855246,0.855246,0.838047,0.838047,0.838047,0.820269,0.820269,0.820269,0.801977,0.801977,0.801977,0.783234,0.783234,0.783234,0.764105,0.764105,0.764105,0.744654,0.744654,0.744654,0.724946,0.724946,0.724946,0.705045,0.705045,0.705045,0.685015,0.685015,0.685015,0.664921,0.664921,0.664921,0.644827,0.644827,0.644827,0.624798,0.624798,0.624798,0.604897,0.604897,0.604897,0.585189,0.585189,0.585189,0.565738,0.565738,0.565738,0.546609,0.546609,0.546609,0.527866,0.527866,0.527866,0.509573,0.509573,0.509573,0.491795,0.491795,0.491795,0.474597,0.474597,0.474597,0.458041,0.458041,0.458041,0.442193,0.442193,0.442193,0.427117,0.427117,0.427117,0.412878,0.412878,0.412878,0.399539,0.399539,0.399539,0.387165,0.387165,0.387165,0.375821,0.375821,0.375821,0.36557,0.36557,0.36557,0.356477,0.356477,0.356477,0.348607,0.348607,0.348607,0.342023,0.342023,0.342023,0.336791,0.336791,0.336791,0.332973,0.332973,0.332973,0.330636,0.330636,0.330636,0.329843,0.329843,0.329843]
                        },
                        "pos": 
                        {
                            "times": [0,0.0333333,0.0666667,0.1,0.133333,0.166667,0.2,0.233333,0.266667,0.3,0.333333,0.366667,0.4,0.433333,0.466667,0.5,0.533333,0.566667,0.6,0.633333,0.666667,0.7,0.733333,0.766667,0.8,0.833333,0.866667,0.9,0.933333,0.966667,1,1.03333,1.06667,1.1,1.13333,1.16667,1.2,1.23333,1.26667,1.3,1.33333,1.36667,1.4,1.43333,1.46667,1.5,1.53333,1.56667,1.6,1.63333,1.66667],
                            "values": [-1.11219,0,22.775,-1.25987,0.086506,22.9447,-1.69493,0.341345,23.4447,-2.4054,0.757504,24.2611,-3.37929,1.32797,25.3804,-4.60464,2.04573,26.7886,-6.06947,2.90376,28.472,-7.76181,3.89506,30.4168,-9.66969,5.01261,32.6094,-11.7811,6.2494,35.0359,-14.0841,7.59841,37.6826,-16.5668,9.05263,40.5357,-19.2171,10.605,43.5814,-22.023,12.2486,46.806,-24.9726,13.9764,50.1958,-28.0539,15.7813,53.7369,-31.255,17.6564,57.4157,-34.5639,19.5946,61.2182,-37.9685,21.5888,65.1309,-41.457,23.6322,69.1399,-45.0173,25.7177,73.2315,-48.6374,27.8382,77.3919,-52.3055,29.9868,81.6073,-56.0095,32.1565,85.864,-59.7375,34.3401,90.1482,-63.4774,36.5308,94.4462,-67.2173,38.7215,98.7441,-70.9452,40.9052,103.028,-74.6492,43.0748,107.285,-78.3173,45.2234,111.5,-81.9375,47.3439,115.661,-85.4978,49.4294,119.752,-88.9862,51.4728,123.761,-92.3909,53.4671,127.674,-95.6997,55.4053,131.477,-98.9008,57.2803,135.155,-101.982,59.0853,138.697,-104.932,60.813,142.086,-107.738,62.4566,145.311,-110.388,64.009,148.357,-112.871,65.4632,151.21,-115.174,66.8122,153.856,-117.285,68.049,156.283,-119.193,69.1666,158.475,-120.885,70.1579,160.42,-122.35,71.0159,162.104,-123.575,71.7337,163.512,-124.549,72.3042,164.631,-125.26,72.7203,165.448,-125.695,72.9751,165.948,-125.843,73.0617,166.117]
                        },
                        "rot": 
                        {
                            "times": [0,1.66667],
                            "values": [0,0,0,1,0,0,0,1]
                        }
                    }
                ]
            }
        ]
    }
}