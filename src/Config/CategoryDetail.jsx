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
import others from '../images/others.png'
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
















// import washing from '../images/washing-machine-1.png'
// import washing from '../images/washing-machine-1.png'
// import washing from '../images/washing-machine-1.png'
// import washing from '../images/washing-machine-1.png'
// import washing from '../images/washing-machine-1.png'


















import ass from '../images/chair.png'













const CategoriesData=[
    {
        cate:'electricity',
        heading:"No Electricity",
        effect:"Effected Part",
        icons:loginhomr,
        text:'Entire Property',
        img:ass,
        main:"Main Switch Trapped"
    },
    {
        cate:'electricity',
        icons:entire,
        text:'Part Of Property',
        img:ass,
        main:"Main Switch Trapped"
    },
    
    {
        cate:'waterLeak',
        heading:"Water Leacking",
        effect:"Leacking Condition",
        icons:dripping,
        text:"Dripping"
    },
    {
        cate:'waterLeak',
        icons:sudden,
        text:"Sudden Intermittent Bursts"
    },
    {
        cate:'waterLeak',
        icons:ghushing,
        text:"Gurshing"
    },
    {
        cate:'heat',
        icons:img,
        text:"Dripping"
    },
    {
        heading:"No Heating",
        cate:'heat',
        icons:access,
        text:"Sudden Intermittent Bursts"
    },
    {
        
        cate:'heat',
        icons:bulb,
        text:"Gurshing"
    },
    {
        // heading:"No Heating",
        heading:"Kitchen",
        effect:"Category",

        cate:'kitchen',
        icons:whiteGood,
        text:"White Goods"
    },
    {
        cate:'kitchen',
        icons:cooker,
        text:" Cooker Head"
    },
    {
        cate:'kitchen',
        icons:Sink,
        text:"Tap sink"
    },
    ,
    {
        cate:'kitchen',
        icons:Drawers,
        text:"XYZ"
    },
    {
        cate:'kitchen',
        icons:Switch,
        text:"Light & Switch"
    },
    {
        cate:'kitchen',
        icons:others,
        text:"Others"
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
        cate:'bathroom',
        icons:toilet,
        text:"Gurshing"
    },
    {
        cate:'bathroom',
        icons:shower,
        text:"White Goods"
    },
    {
        cate:'bathroom',
        icons:basin,
        text:" Cooker Head"
    },
    {
        cate:'bathroom',
        icons:tab,
        text:"Tap sink"
    },
    ,
    {
        cate:'bathroom',
        icons:exaust,
        text:"XYZ"
    },
    {
        cate:'bathroom',
        icons:lightSwitch,
        text:"Other"
    },
    ,
    {
        cate:'bathroom',
        icons:bxsdoor,
        text:"Tap sink"
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
        text:"Light & Switch"
    },
    ,
    {
        cate:'alarm',
        icons:alarm2,
        text:"Tap sink"
    },
    ,
    {
        cate:'alarm',
        icons:alarm3,
        text:"XYZ"
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