import img from '../images/__TEMP__SVG__.png'
import access from '../images/access.png'
import bulb from '../images/bulb.png'
import loginhomr from '../images/loginhomr.png'
import entire from '../images/entire.png'
import dripping from '../images/dripping-1.png'
import sudden from '../images/sudden burst.png'
import ghushing from '../images/ghushing.png'
import whiteGood from '../images/whiteGood.png'
import cooker from '../images/cooker.png'
import  Sink from '../images/Tap- Sink.png'
import Drawers from '../images/Cabinets- Drawers.png'
import Switch from '../images/Light & Switch-1.png'
import others from '../images/other (2).png'
import Group from '../images/Group 2285.png'
import kitchencooker from '../images/kitchen-cooker.png'

import fridge from '../images/bxs-fridge.png'
import washing from '../images/washing-machine-1.png'
import bxs from '../images/bxs-dryer.png'
import microwave from '../images/microwave.png'
import garag from '../images/switch-1.png'
 import door from '../images/bxs-door-open-1.png'
import toilet from '../images/bathroom/Union 22.png'
import shower from '../images/bathroom/shower-1.png'
import basin from '../images/bathroom/Group 2292.png'
import tab from '../images/bathroom/Group 2293.png'
import exaust from '../images/bathroom/cooling-1.png'
import lightSwitch from '../images/bathroom/switch-1.png'
import bxsdoor from '../images/bathroom/bxs-door-open-1.png'
import mirror from '../images/bathroom/mirror-1.png'
import alarm1 from '../images/Group 2311.png'
 import alarm2 from '../images/Group 2310.png'
import alarm3 from '../images/Group 1660.png'
import lostkey1 from '../images/lost key/bxs-key-1.png'
import lostkey2 from '../images/lost key/door-closed-fill-1.png'
import lostkey3 from '../images/lost key/Group 2320.png'
import lostkey4 from '../images/lost key/Group 2319.png'
import lostkey5 from '../images/lost key/Group 2319.png'
import garden1 from '../images/garden/Group 2326.png'
import garden2 from '../images/garden/fence-1.png'
import garden3 from '../images/garden/Group 2327.png'
import garden13 from '../images/garden/Path 981.png'
import garden4 from '../images/garden/Group 2328.png'
import garden5 from '../images/garden/plumbing-1.png'
import pest1 from '../images/pest control/__TEMP__SVG__-1.png'
import pest2 from '../images/pest control/Path 982.png'

import wall1 from '../images/wall-floor-cieling/Group 2332.png'
import wall2 from '../images/wall-floor-cieling/Group 2333.png'
import wall3 from '../images/wall-floor-cieling/Group 2334.png'
import enterance1 from '../images/ENTERENCE-stairs/Group 2336.png'
import enterance2 from '../images/ENTERENCE-stairs/Group 2335.png'
import enterance3 from '../images/ENTERENCE-stairs/Group 2337.png'
import window1 from '../images/window/window-1.png'
import window2 from '../images/window/Group 2341.png'
import ass from '../images/chair.png'
import awater1 from '../images/water leak/Running Water.png'
import awater2 from '../images/water leak/Running Water.png'
import awater3 from '../images/water leak/Water Leak.png'
import awater4 from '../images/water leak/Over flowing tap.png'
import awater5 from '../images/water leak/Behind Sink.png'
import awater6 from '../images/water leak/Group 4645.png'
import awater7 from '../images/water leak/Radiator  Ceiling.png'
import awater8 from '../images/water leak/Radiator  Ceiling.png'


import kitchen1 from '../images/kitchen/whitegoods/Group 1809.png'
import kitchen2 from '../images/kitchen/whitegoods/kitchen-cooker.png'
import kitchen3 from '../images/kitchen/whitegoods/bxs-fridge.png'
import kitchen4 from '../images/kitchen/whitegoods/Group 2286.png'
import kitchen5 from '../images/kitchen/whitegoods/washing-machine-1.png'
import kitchen6 from '../images/kitchen/whitegoods/bxs-dryer.png'
import kitchen7 from '../images/kitchen/whitegoods/microwave.png'
import bath1 from '../images/bathroom/Group 2301.png'
import bath2 from '../images/bathroom/shower-1.png'
import bath3 from '../images/bathroom/Group 2308.png'
import bath4 from '../images/bathroom/Group 2303.png'
import bath5 from '../images/bathroom/Group 2305.png'
import bath6 from '../images/bathroom/Group 2304.png'

import alarm12 from '../images/alarm/Group 2314.png'
import alarm13 from '../images/bbb.png'












const CategoriesData=[
    {
        cate:'electricity',
        heading:"No Electricity",
        effect:"Effected Part",
        icons:loginhomr,
        text:'Entire Property',
        img:ass,
        main:"Main Switch Trapped",
        Reason:"Reason"
    },
    {
        cate:'electricity',
        icons:entire,
        text:'Part Of Property',
        img:ass,
        main:"Associated Switch\Circuit"
    },
    {
        cate:'electricity',
        img:ass,
        main:"Associated Switch\Circuit"
    }
    ,
    
    {
        cate:'waterLeak',
        img:awater2,
        main:"Runing Water Bowl",
        heading:"Water Leacking",
        effect:"Leacking Condition",
        icons:dripping,
        text:"Dripping",
     
    },
    {
        cate:'waterLeak',
        img:awater3,
        main:"Runing Water Bowl",
        icons:sudden,
        text:"Sudden Intermittent Bursts"
    },
    {
        cate:'waterLeak',
        img:awater4,
        main:"Over flowing tap ",
        icons:ghushing,
        text:"Gurshing"
    },
    
    {
        cate:'waterLeak',
        img:awater5,
        main:"Behind the Sink ",
    },
    {
        cate:'waterLeak',
        img:awater6,
        main:"Under the Kitchen ",
    },
    {
        cate:'waterLeak',
        img:awater7,
        main:"Rediater Ceiling ",
    },
    {
        cate:'waterLeak',
        img:awater8,
        main:"Washing Machin ",
    },
   
    
   
    {
        // heading:"No Heating",
        heading:"Kitchen",
        effect:"Category",

        cate:'kitchen',
        icons:whiteGood,
        text:"White Goods",
        img:kitchen1,
        main:"Hob Stove ",
    },
    {
        cate:'kitchen',
        icons:cooker,
        text:" Cooker Head",
        img:kitchen2,
        main:"Hob Stove ",
    },
    {
        cate:'kitchen',
        icons:Sink,
        text:"Tap sink",
        img:kitchen3,
        main:"Hob Stove ",
    },
    ,
    {
        cate:'kitchen',
        icons:Drawers,
        text:"XYZ",
        img:kitchen4,
        main:"Hob Stove ",
    },
    {
        cate:'kitchen',
        icons:Switch,
        text:"Light & Switch",
        img:kitchen5,
        main:"Hob Stove ",
    },
    {
        cate:'kitchen',
        icons:others,
        text:"Others",
        img:kitchen6,
        main:"Hob Stove ",
    },
    
    {
        cate:'kitchen',
      
        img:kitchen7,
        main:"Microwave ",
    },
    {
        heading:"White Goods",
        effect:"Category",
        cate:'whiteGoods',
        icons:Group,
        text:"Dripping"
    },
    {
        cate:'whiteGoods',
        icons:kitchencooker,
        text:"Sudden Intermittent Bursts"
    },
    {
        cate:'whiteGoods',
        icons:fridge,
        text:"Fridge Freezer"
    },
    {
        cate:'whiteGoods',
        icons:washing,
        text:"White Goods"
    },
    {
        cate:'whiteGoods',
        icons:washing,
        text:" Cooker Head"
    },
    {
        cate:'whiteGoods',
        icons:bxs,
        text:"Tap sink"
    },
    ,
    {
        cate:'whiteGoods',
        icons:microwave,
        text:"Microwave"
    },
    {
        cate:'whiteGoods',
        icons:others,
        text:"Light & Switch"
    },
    ,
    {
        heading:"Garage",
        effect:"Category",
        cate:'garag',
        icons:door,
        text:"Garag Door"
    },
    ,
    {
        cate:'garag',
        icons:garag,
        text:"Light Switch"
    },
    {
        cate:'garag',
        icons:others,
        text:"Other"
    },
    ,
    {
        heading:"Bathroom",
        effect:"Category",
        cate:'bathroom',
        icons:toilet,
        text:"Gurshing",
        img:bath2,
        main:"shower head ",
      
    },
    {
        
        cate:'bathroom',
        icons:shower,
     
        text:"White Goods",
        cate:'kitchen',     
        img:kitchen7,
        main:"Microwave ",
        img:bath1,
        main:"shower",
    },
    {
        cate:'bathroom',
        icons:basin,
        text:" Cooker Head",
        img:bath3,
        main:"shower head ",
    },
    {
        cate:'bathroom',
        icons:tab,
        text:"Tap sink",
        img:bath4,
        main:"shower head ",
    },
    ,
    {
        cate:'bathroom',
        icons:exaust,
        text:"XYZ",
        img:bath5,
        main:"shower head ",
    },
    {
        cate:'bathroom',
        icons:lightSwitch,
        text:"Other",
        img:bath6,
        main:"shower head ",
    },
    ,
    {
        cate:'bathroom',
        icons:bxsdoor,
        text:"Tap sink",
        img:others,
        main:"Other",
    },
    ,
    {
        cate:'bathroom',
        icons:mirror,
        text:"XYZ"
    },
    {
        cate:'bathroom',
        icons:others,
        text:"Light & Switch"
    },
    ,
    {
        cate:'alarm',
        icons:alarm1,
        text:"Light & Switch",
        img:alarm12,
        main:"shower head ",
    },
    ,
    {
        heading:"Alarm",
        effect:"Category",
        cate:'alarm',
        icons:alarm2,
        text:"Tap sink",
        img:alarm13,
        main:"shower head ",
    },
    ,
    {
        cate:'alarm',
        icons:alarm3,
        text:"XYZ",
        img:others,
        main:"Light & Switch"
    },
    {
        cate:'alarm',
        icons:others,
        text:"Light & Switch"
    } ,
    {
        cate:'lostKey',
        icons:lostkey1,
        text:"XYZ"
    },
    {
        heading:"Lost Keys",
        effect:"Category",
        cate:'lostKey',
        icons:lostkey2,
        text:"Light & Switch"
    },
    ,
    {
        cate:'lostKey',
        icons:lostkey3,
        text:"Light & Switch"
    },
    ,
    {
        cate:'lostKey',
        icons:lostkey4,
        text:"Tap sink"
    },
    ,
    {
        cate:'lostKey',
        icons:lostkey5,
        text:"XYZ"
    },
    {
        cate:'lostKey',
        icons:others,
        text:"Light & Switch"
    }
    ,
    {
        heading:"Garden/Conservatory",
        effect:"Category",
        cate:'garden',
        icons:garden1,
        text:"Light & Switch"
    } ,
    {
        cate:'garden',
        icons:garden2,
        text:"XYZ"
    },
    {
        cate:'garden',
        icons:garden3,
        text:"Light & Switch"
    },
    ,
    {
        cate:'garden',
        icons:garden13,
        text:"Light & Switch"
    },
    ,
    {
        cate:'garden',
        icons:garden4,
        text:"Tap sink"
    },
    ,
    {
        cate:'garden',
        icons:garden5,
        text:"XYZ"
    },
    {
        cate:'garden',
        icons:others,
        text:"Light & Switch"
    } ,
    {
        heading:"Pest Control",
        effect:"Category",
        cate:'pest',
        icons:pest1,
        text:"Tap sink"
    },
    ,
    {
        cate:'pest',
        icons:pest2,
        text:"XYZ"
    },
    {
        cate:'pest',
        icons:others,
        text:"Light & Switch"
    },
    {
        heading:"Wall/Ceiling/Control",
        effect:"Category",
        cate:'wall',
        icons:wall1,
        text:"Tap sink"
    },
    ,
    {
      
        cate:'wall',
        icons:wall2,
        text:"XYZ"
    },
    {
        cate:'wall',
        icons:wall3,
        text:"Light & Switch"
    }
    ,
    {
        heading:"Entrance/Hallway/Stairs",
        effect:"Category",
        cate:'hall',
        icons:enterance1,
        text:"Tap sink"
    },
    ,
    {
        cate:'hall',
        icons:enterance2,
        text:"XYZ"
    },
    {
        cate:'hall',
        icons:enterance3,
        text:"Light & Switch"
    },
    {
        cate:'hall',
        icons:others,
        text:"XYZ"
    }
    ,
    {
        heading:"Window",
        effect:"Category",
        cate:'window',
        icons:window1,
        text:"XYZ"
    },
    {
        cate:'window',
        icons:window2,
        text:"Light & Switch"
    },
    {
        cate:'window',
        icons:others,
        text:"XYZ"
    }

]

export default CategoriesData