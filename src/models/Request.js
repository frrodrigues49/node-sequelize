module.exports = (sequelize, DataTypes) => {
  const Request = sequelize.define('request', {
    date: {
      type:DataTypes.DATE
    },
    unityadm_id: {
      type: DataTypes.INTEGER,
    }, 
    deliveryplace_id: {
      type: DataTypes.INTEGER,
    },
    comments: {
      type: DataTypes.STRING,
    },
    need: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.STRING
    }
  },{
    timestamps: false,
    freezeTableName: true,
  });
  Request.associate = function(models) {
    
    //Relation

  };
  return Request;
};