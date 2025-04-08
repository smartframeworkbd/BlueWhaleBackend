
import { DataTypes } from "sequelize";
import sequelize from "./index.js";
const breakingNewsModel = sequelize.define('breaking_news',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        unique:true
    },
    email:{
        type:DataTypes.STRING(150),
        validate:{
            isEmail:true
        }
    },
    phoneNumber:{
        type:DataTypes.STRING(15),
    
    },
    newsBangla:{
        type:DataTypes.STRING,
        allowNull:true
    },
    newsEnglish:{
        type:DataTypes.STRING,
        allowNull:false
    },
    status:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    },
    order:{
        type:DataTypes.INTEGER,
        allowNull:true
    }
},{
    timestamps:true
})

export default breakingNewsModel