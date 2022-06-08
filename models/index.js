const User = require('./User');
const Project = require('./project');
const Comment = require('./Comment');

Project.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

User.hasMany(Project, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

Project.hasMany(Comment, {
  foreignKey: 'projectId',
  onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

User.hasMany(Comment, {
  foreignKey: 'commentId',
  onDelete: 'CASCADE',
});

module.exports = {
  User,
  Comment,
  Project,
};
