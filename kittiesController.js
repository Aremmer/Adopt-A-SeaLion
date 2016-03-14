	angular.module("AdoptionApp", [])
		.controller("SeaLionController", SeaLionController)

function SeaLionController() {
  var slc = this
  slc.buttonSwitch = true

  slc.adoptees = [{
      slName: 'Karl',
      monthsOld: 22,
      gender: 'boy',
      image: "http://fscdn.wcs.org/2015/09/18/57d936u9yu_Julie_Larsen_Maher_0100_California_Sea_Lion_Indy_close_up_SLP_BZ_03_08_12_hr.jpg",
      adopted: true,
			bio: "I like icecream",
			interests: ["Anchovies", "Bubbles", "Modeling"]
    }, {
      slName: 'Jack',
      monthsOld: 4,
      gender: 'boy',
      image: "http://calcoastnews.com/images/2015/12/Sea_lion-7.jpg",
      adopted: false
			bio: "Nanner-nanner",
			interests: ["Sunbathing"]
    }, {
      slName: 'Oscar',
      monthsOld: 80,
      gender: 'boy',
      image: "http://i1337.photobucket.com/albums/o675/SWimages/sealion_zps8cb78cdd.jpg",
      adopted: false
			bio: "Would you like to hear an interestering story about a bridge? It's positivly...riviting",
			interests: ["History", "Stamps"],
    }, {
      slName: 'Princess Rarri',
      monthsOld: 3,
      gender: 'girl',
      image: "http://justcuteanimals.com/wp-content/uploads/2013/05/seals-sea-lion-pictures-cute-beautiful-animal-pics-600x337.jpg",
      adopted: false
			bio: "Mommy, whats a soul?",
			interests: ["My Princess Pony"]
    }, {
			slName: 'Margret',
      monthsOld: 16,
      gender: 'girl',
      image: "http://media.portland.indymedia.org/images/2009/03/387234.jpg",
      adopted: false
			bio: "That performance was positivly repugnant",
			interests: ["China", "Silver Spoons", "PTA"]
		}, {
			slName: 'Timothy',
      monthsOld: 16,
      gender: 'boy',
      image: "http://a.abcnews.com/images/Lifestyle/ld_sea_lions3_ss_ml_130705_ssh.jpg",
      adopted: false
			bio: "Look I can go fast",
			interests: ["HotWheels", "Wrestling"]
		}

  ]

	slc.booleanButton = function(lion) {
		 lion.adopted = !lion.adopted
		 console.log("Working");
	}

}
