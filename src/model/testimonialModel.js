import { DataTypes } from "sequelize";
import sequelize from "./index.js";
const Testimonial = sequelize.define("Testimonial", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Name is required",
      },
    },
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Message is required",
      },
    },
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: {
        msg: "Rating must be an integer",
      },
      min: {
        args: [1],
        msg: "Rating must be at least 1",
      },
      max: {
        args: [5],
        msg: "Rating must be at most 5",
      },
    },
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true, // Optional image field
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
},{
  tableName:"testimonials"
});

// Export the model to use in other files
export default Testimonial;
