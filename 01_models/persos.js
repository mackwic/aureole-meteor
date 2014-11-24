
Persos = new Mongo.Collection('persos');

var type_str = {type: String};
var type_num = {type: Number};
var type_obj = {type: Object};

var positive_num = type_num;
positive_num.min = 0;

Schemas.Persos = new SimpleSchema({
  main:         type_obj,
  'main.name':  type_str,
  'main.alignment':  {
    type: String,
    allowedValues: [
      'Loyal Bon', 'Neutre Bon', 'Chaotique Bon',
      'Loyal Neutre', 'Neutre Neutre', 'Chaotique Neutre',
      'Loyal Mauvais', 'Neutre Mauvais', 'Chaotique Mauvais',
    ]
  },
  stats:        type_obj,
  'stats.maxHp': {
    type: Number,
    min: 1, max: 9000
  },
  'stats.currentHp': {
    type: Number,
    min: 0, max: 9000
  },
  'stats.defense':    positive_num,
  'stats.reflexes':   positive_num,
  'stats.vigueur':    positive_num,
  'stats.volonte':    positive_num,
  'gold.pp':         positive_num,
  'gold.po':         positive_num,
  'gold.pa':         positive_num
});

Persos.helpers({
  all: function() {
    return Persos.find();
  },
  count: function() {
    return Persos.find().count();
  }
});



Persos.attachSchema(Schemas.Persos);
GroundDB(Persos);
