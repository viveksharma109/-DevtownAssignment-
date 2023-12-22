const express = require('express');
const router = express.Router();
const Mobile = require('../models/mobile');

router.get('/', async (req, res) => {
    const { name ,price,type,processor,memory,os} = req.query; 
    try {
        let Mobiles = await Mobile.find(); 
        if(name){
            Mobiles=Mobiles.filter((mobile) =>{ 
                if(mobile.name===name){
                    return mobile;
                }
            })
        }
        if(price){
            Mobiles=Mobiles.filter((mobile) =>{ 
                if(mobile.price===price){
                    return mobile;
                }
            })
        }
        if(type){
            Mobiles=Mobiles.filter((mobile) =>{ 
                if(mobile.type===type){
                    return mobile;
                }
            })
        }
        if(processor){
            Mobiles=Mobiles.filter((mobile) =>{ 
                if(mobile.processor===processor){
                    return mobile;
                }
            })
        }
        if(memory){
            Mobiles=Mobiles.filter((mobile) =>{ 
                if(mobile.memory===memory){
                    return mobile;
                }
            })
        }
        if(os){
            Mobiles=Mobiles.filter((mobile) =>{ 
                if(mobile.name===name){
                    return mobile;
                }
            })
        }
        if (Mobiles.length === 0) {
            return res.status(404).json({
                data: [],
                message: "No Mobiles found"
            });
        }
        res.status(200).json({
            data: Mobiles,
            message: "Mobiles fetched successfully"
        });
    }  
    catch (error) {
        res.status(500).json({
            message: 'Error retrieving Mobiles for the selected criteria',
            error
        });
    }
});

module.exports = router;

  