// Powerd by z01.com
//地图	
var unimap = function(){
	if(GetID == 1){
		data=[{name:'United Kingdom',selected:true},{name:'Germany',selected:true},{name:'France',selected:true},{name:'Italy',selected:true},{name:'Poland',selected:true},];
	}
	else if(GetID == 2){
		data=[{name:'United Kingdom',selected:true},{name:'Germany',selected:true},{name:'France',selected:true},{name:'Italy',selected:true},{name:'Poland',selected:true},];
	}
	else if(GetID == 3){
	data=[{name:'United Kingdom',selected:true},{name:'Norway',selected:true},{name:'Finland',selected:true},{name:'Sweden',selected:true},{name:'Russia',selected:true}];
	}
	else if(GetID == 4){
		data=[{name:'Slovenia',selected:true},{name:'Croatia',selected:true},];
	}
	else if(GetID == 8){
	data=[{name:'Greece',selected:true},{name:'Croatia',selected:true},];
	}
	else if(GetID == 9){
	data=[{name:'Bulgaria',selected:true},{name:'Ukraine',selected:true},{name:'Russia',selected:true},];
	}
	else if(GetID == 10){
	data=[{name:'Bulgaria',selected:true},{name:'Ukraine',selected:true},{name:'Russia',selected:true},];
	}
	else if(GetID == 11){
	data=[{name:'United States of America',selected:true},];
	}
	else if(GetID == 12){
	data=[{name:'Germany',selected:true},];
	}
	else if(GetID == 13){
	data=[{name:'Saudi Arabia',selected:true},{name:'Yemen',selected:true},{name:'United Arab Emirates',selected:true},{name:'Oman',selected:true},{name:'Kuwait',selected:true},{name:'Iraq',selected:true},{name:'Syria',selected:true},{name:'Jordan',selected:true},{name:'Lebanon',selected:true},{name:'Egypt',selected:true},{name:'Sudan',selected:true},{name:'Tunisia',selected:true},{name:'Libya',selected:true},{name:'Mauritania',selected:true},{name:'Algeria',selected:true},{name:'Morocco',selected:true},];
	}
	else if(GetID == 14){
	data=[{name:'Syria',selected:true},];
	}
	else if(GetID == 16){
		data = [{name:'Fiji',selected:true},{name:'India',selected:true},{name:'Pakistan',selected:true},]
	}
	else if(GetID == 17){
	data=[{name:'Bangladesh',selected:true},{name:'India',selected:true},];
	}
	else if(GetID == 18){
	data=[{name:'Pakistan',selected:true},{name:'India',selected:true},];
	}
	else if(GetID == 19){
	data=[{name:'United Republic of Tanzania',selected:true},{name:'Kenya',selected:true},{name:'Uganda',selected:true},{name:'India',selected:true},{name:'Pakistan',selected:true},];
	}
	else if(GetID == 20){
	data=[{name:'India',selected:true},];
	}
	else if(GetID == 21){
	data=[{name:'Kenya',selected:true},{name:'Sri Lanka',selected:true},{name:'India',selected:true},{name:'Malaysia',selected:true},];
	}
	else if(GetID == 22){
	data=[{name:'India',selected:true},];
	}
	else if(GetID == 23){
	data=[{name:'India',selected:true},];
	}
	else if(GetID == 24){
	data=[{name:'India',selected:true},];
	}
	else if(GetID == 25){
	data=[{name:'India',selected:true},{name:'Sri Lanka',selected:true},];
	}
	else if(GetID == 26){
	data=[{name:'India',selected:true},{name:'Thailand',selected:true},];
	}
	else if(GetID == 27){
	data=[{name:'Laos',selected:true},{name:'Thailand',selected:true},];
	}
	else if(GetID == 28){
	data=[{name:'China',selected:true},{name:'Nepal',selected:true},{name:'India',selected:true},{name:'Pakistan',selected:true},];
	}
	else if(GetID == 29){
	data=[{name:'Bangladesh',selected:true},{name:'Thailand',selected:true},{name:'Myanmar',selected:true},{name:'Malaysia',selected:true},];
	}
	else if(GetID == 41){
	data=[{name:'Indonesia',selected:true},{name:'South Korea',selected:true},{name:'North Korea',selected:true},{name:'China',selected:true},{name:'Japan',selected:true},];
	}
	else if(GetID == 42){
	data=[{name:'Somalia',selected:true},{name:'Israel',selected:true},{name:'Eritrea',selected:true},{name:'Sudan',selected:true},{name:'Ethiopia',selected:true},];
	}
	else if(GetID == 43){
	data=[{name:'United States of America',selected:true},];
	}
	else if(GetID == 44){
	data=[{name:'United States of America',selected:true},{name:'Canada',selected:true},];
	}
	else if(GetID == 45){
	data=[{name:'Ireland',selected:true},];
	}
	else if(GetID == 47){
	data=[{name:'Philippines',selected:true},];
	}
	else if(GetID == 48){
	data=[{name:'Philippines',selected:true},];
	}
	else if(GetID == 49){
	data=[{name:'Philippines',selected:true},];
	}
	else if(GetID == 50){
	data=[{name:'Philippines',selected:true},];
	}
	else if(GetID == 51){
	data=[{name:'China',selected:true},{name:'Laos',selected:true},{name:'Thailand',selected:true},{name:'Vietnam',selected:true},{name:'Cambodia',selected:true},];
	}
	else if(GetID == 52){
	data=[{name:'China',selected:true},{name:'Mongolia',selected:true},{name:'Afghanistan',selected:true},];
	}
	else if(GetID == 53){
	data=[{name:'India',selected:true},{name:'Pakistan',selected:true},{name:'Nepal',selected:true},];
	}
	else if(GetID == 54){
	data=[{name:'Myanmar',selected:true},{name:'Laos',selected:true},{name:'Thailand',selected:true},{name:'Vietnam',selected:true},];
	}
	else if(GetID == 61){
		data=[{name:'United Kingdom',selected:true},{name:'Germany',selected:true},{name:'France',selected:true},{name:'Italy',selected:true},{name:'Poland',selected:true},{name:'United States of America',selected:true},];
	}
	else if(GetID == 62){
	data=[{name:'Greece',selected:true},];
	}
	else if(GetID == 64){
	data=[{name:'China',selected:true},{name:'Japan',selected:true},{name:'South Korea',selected:true},{name:'North Korea',selected:true},];
	}
	else if(GetID == 88){
	data=[{name:'China',selected:true},{name:'Japan',selected:true},{name:'South Korea',selected:true},{name:'North Korea',selected:true},];
	}
	else if(GetID == 89){
	data=[{name:'China',selected:true},{name:'Japan',selected:true},{name:'South Korea',selected:true},{name:'North Korea',selected:true},];
	}
	else if(GetID == 90){
	data=[{name:'Japan',selected:true},{name:'Peru',selected:true},{name:'South Korea',selected:true},{name:'North Korea',selected:true},];
	}
	else if(GetID == 91){
	data=[{name:'Japan',selected:true},{name:'Peru',selected:true},{name:'South Korea',selected:true},{name:'North Korea',selected:true},];
	}
	else if(GetID == 92){
	data=[{name:'China',selected:true},];
	}
	else if(GetID == 93){
	data=[{name:'China',selected:true},{name:'Japan',selected:true},{name:'South Korea',selected:true},{name:'North Korea',selected:true},];
	}
	else if(GetID == 94){
	data=[{name:'China',selected:true},];
	}
	else if(GetID == 95){
	data=[{name:'China',selected:true},];
	}
	else if(GetID == 96){
	data=[{name:'Japan',selected:true},{name:'Peru',selected:true},{name:'South Korea',selected:true},{name:'North Korea',selected:true},];
	}
	else if(GetID == 97){
	data=[{name:'China',selected:true},{name:'Japan',selected:true},{name:'South Korea',selected:true},{name:'North Korea',selected:true},];
	}
	else if(GetID == 98){
	data=[{name:'China',selected:true},{name:'Japan',selected:true},{name:'South Korea',selected:true},{name:'North Korea',selected:true},];
	}
	else if(GetID == 99){
	data=[{name:'China',selected:true},{name:'Japan',selected:true},{name:'South Korea',selected:true},{name:'North Korea',selected:true},];
	}
	else if(GetID == 100){
	data=[{name:'China',selected:true},];
	}
	else if(GetID == 101){
	data=[{name:'China',selected:true},{name:'Japan',selected:true},{name:'South Korea',selected:true},{name:'North Korea',selected:true},];
	}
	else if(GetID == 102){
	data=[{name:'China',selected:true},];
	}
	else if(GetID == 103){
	data=[{name:'China',selected:true},];
	}
	else if(GetID == 104){
	data=[{name:'China',selected:true},{name:'Japan',selected:true},{name:'South Korea',selected:true},{name:'North Korea',selected:true},{name:'Indonesia',selected:true},];
	}
	else if(GetID == 110){
	data=[{name:'China',selected:true},{name:'Japan',selected:true},{name:'South Korea',selected:true},{name:'North Korea',selected:true},];
	}
}