var Schema = {
  users: {
    id: {type: 'increments', nullable: false, primary: true},
    name: {type: 'string', maxlength: 150, nullable: false, unique: true},
    email: {type: 'string', maxlength: 254, nullable: false, unique: true}
    
    // add hashedpassword attribute later
  },
  events: {
    id: {type: 'increments', nullable: false, primary: true},
    info: { type: 'text', maxlength: 16777215, nullable: false}
    triggered: { type: 'boolean', nullable: false}
  },
  comments: {
    id: {type: 'increments', nullable: false, primary: true},
    user_id: {type: 'integer', nullable: false, unsigned: true},
    event_id: {type: 'integer', nullable: false, unsigned: true},
    commenttext: {tyep: 'text', maxlength: 16777215, nullable: false }
  },
  tags: {
    id: {type: 'increments', nullable: false, primary: true},
    name: {type: 'string', maxlength: 150, nullable: false}
  },
  events_tags: {
    id: {type: 'increments', nullable: false, primary: true},
    event_id: {type: 'integer', nullable: false, unsigned: true},
    tag_id : {type: 'integer', nullable: false, unsigned: true}
  },
  users_events: {
    id: {type: 'increments', nullable: false, primary: true},
    user_id: {type: 'integer', nullable: false, unsigned: true},
    events_id: {type: 'integer', nullable: false, unsigned: true}
  }
};
module.exports = Schema;