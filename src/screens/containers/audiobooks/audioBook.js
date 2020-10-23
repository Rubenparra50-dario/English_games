import React, { Component } from 'react';
import {Text, View, ImageBackground} from 'react-native';
import { sG } from '../../components/general/styles';
import {AudioBookTemplate} from '../../template/audiobooks/audioBook';
import Carousel from 'react-native-snap-carousel';

export default class AudioBook extends Component {

  constructor(props) { 
    super(props);
    this.state = {
        visible: false,
        animating: false,
        alignsecond: false,
        status:1,
        id_avatar:'',
        activeIndex:0,
        carouselItems: [],
    };

    setTimeout(
        () =>
          this.setState({ align: 'flex-start' }, function() {
            this.setState({
              alignsecond: true,
            });
          }),
        2000
      );
  }

    getInfo = () => {
        const tema =  this.props.navigation.getParam('tema')
        if(tema===1){
            this.setState({carouselItems: ApiCroag,})
        }else if(tema===2){
            this.setState({carouselItems: ApiRed,})
        }else if(tema===3){
            this.setState({carouselItems: ApiPoor,})
        }else if(tema===4){
            this.setState({carouselItems: ApiDuck,})
        }else if(tema===5){
            this.setState({carouselItems: ApiAladdin,})
        }
    }

    _renderItem({item,index}){
        return (
            <View style={[sG.w_95, sG.h_95, sG.bg_green_light, sG.brounded, sG.border, sG.card_shadow, sG.m_l_xs, sG.ai_center, sG.jc_center]}>
                <ImageBackground resizeMode='cover' style={[sG.w_95, sG.h_95]} source={require('../../../../assets/audiobooks/fondoPagina.png')}>
                    <View style={[sG.w_95, sG.h_95, sG.ai_center, sG.jc_center]}>
                        {item.imagePrincipal != ''?
                        <View style={[sG.w_80, sG.h_70, sG.brounded]}>
                            <ImageBackground resizeMode='cover' style={[sG.w_100, sG.h_100]} source={item.imagePrincipal}></ImageBackground>
                        </View>
                        :null}
                        {item.imageSecundaria != '' && item.imagePrincipal === ''?
                        <View style={[sG.w_80, sG.h_40, sG.brounded]}>
                            <ImageBackground resizeMode='contain' style={[sG.w_100, sG.h_100]} source={item.imageSecundaria}></ImageBackground>
                        </View>
                        :null}
                        <View style={[sG.w_90, sG.ai_center]}>                            
                            {item.title != ''?
                            <Text style={[sG.h1, sG.text_center, sG.text_white, sG.bold]}>{item.title}</Text>
                            :null}
                            {item.text != ''?
                            <Text style={[sG.h6, sG.text_center, sG.text_white]}>{item.text}</Text>
                            :null}
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }

//--------------------- inicio sección de eventos de botones ----------------------
  
  handlePress = () => {
      this.props.navigation.navigate('AudioBook')
  }

  _toggleBottomNavigationView = () => {
      this.setState({ visible: !this.state.visible });
  };
  
  componentDidMount () {
        this.getInfo();
  }

//--------------------- fin sección de eventos de botones ------------------------


  render () {
    return (
        <View style={[sG.container, sG.ai_center, sG.jc_center]}>
            {this.state.alignsecond?null:(
                <View style={[sG.h_100, sG.w_100, sG.ai_center, sG.jc_center]}>
                    <ImageBackground resizeMode='contain' style={[sG.w_50, sG.h_40]} source={require('../../../../assets/gif/loading.gif')} />
                    <View style={[sG.w_90, sG.h_10, sG.ai_center, sG.jc_center]}>
                            <Text style={[sG.text_primary, sG.h5, sG.text_center, sG.bold]}>Loading ...</Text>
                    </View>
                </View>
            )} 

            {!this.state.alignsecond ? null : (
                <ImageBackground resizeMode='cover' style={[sG.w_100, sG.h_100, sG.ai_center, sG.jc_center]} source={require('../../../../assets/backgroundMolecule.jpg')}>
                    <View style={[sG.h_80, sG.w_90, sG.ai_center, sG.jc_center]}>
                        <Carousel
                        layout={"stack"}
                        layoutCardOffset={`18`}
                        ref={ref => this.carousel = ref}
                        data={this.state.carouselItems}
                        sliderWidth={400}
                        itemWidth={400}
                        renderItem={this._renderItem}
                        onSnapToItem = { index => this.setState({activeIndex:index}) } />
                    </View>
                    <View style={[sG.h_10, sG.w_90, sG.ai_center, sG.jc_center, sG.bg_primary]}></View>
                </ImageBackground>
            )}
        </View>
    )
  }
}

const ApiCroag =[
    {
        imagePrincipal:require('../../../../assets/audiobooks/frog.png'),
        imageSecundaria:'',
        title:"A frog he would a-wooing go",
        text: "",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/frog.png'),
        title:"",
         text: "Personable and dapper,RinRin Froggie. Big Mom Toad’s kid. emerged this a.m.from their pond dressed to kill in Bermuda shorts, gaudy cravat, round Derby hat and mini-cutaway. “Hey, boy, stay home!” bellows Big Mom. Ignoring her command, he fastens his exit.",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/frog/frog1.png'),
        title:"",
        text: "On the road, he meets Junior Mouse, a friendly neighbor, who bids him to join a fun party at Miss Mouse’s where there’s always plenty of booze and grub.",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/frog/frog2.png'),
        title:"",
        text: "Led by the playboy rodent, they soon arrive at her door, and Junior Mouse knocks with elegant flair and greets their  hostess: “At your feet, Miss Mouse. Are you home for visitors?”",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/frog/frog3.png'),
        title:"",
        text: "“Yes indeed, my dear boy, and  most pleased to see you. I was busy at my craft spinning cotton, but that doesn’t matter: welcome both to my home.”",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/frog/frog4.png'),
        title:"",
        text: "They smile, bow, shake hands, and Junior, apt at such things, breaks the ice: “Please, Miss, offer some beer to my green-hued chum who’s hot and thirsty to boot.”",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/frog/frog5.png'),
        title:"",
        text: "While errant boy RinRin empties a pitcher of brew, the hostess brings out a guitar and begs him to sing happy lyrics, elegant tunes.",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/frog/frog6.png'),
        title:"",
        text: "“I’ll be delighted, Miss, but right now my throat is parched like dry burlap and my new clothes a bit too tight.” “I’m sorry about your plight,” cajoles Miss Mouse, “Please loosen tie and vest while I sing in your honor a most singular tune.”",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/frog/frog7.png'),
        title:"",
        text: "In the midst of this joyful soirée of of beer, dance. guitar and singing, Mamma Cat and her kittens troop in trough the door,   and mayhem ensues: Mamma grabs Junior by an ear, mewing “Hallo!” and the kittens take hold of Miss Mouse by her paws and her tail.",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/frog/frog8.png'),
        title:"",
        text: "In the face of such invasion, RinRin puts on his hat, opens the door with his paws and snout, bids all a fine evening, and takes a colossal leap.",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/frog/frog9.png'),
        title:"",
        text: "He keeps leaping so fast and so high that he looses his hat, tears to pieces his shirt, and plump! Lands inside the beak of a glutton duck that swallows him in one gulp.",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/frog/frog10.png'),
        title:"",
        text: "So, one, two, three, Junior and Miss Mouse meet their end first, followed by RinRin Froggie: the cats dined, the duck supped, and Big Mom Toad was left all alone.",
    },
    {
        imagePrincipal:"",
        imageSecundaria:'',
        title:"THE END",
        text: "",
    },
]

const ApiRed =[
    {
        imagePrincipal:require('../../../../assets/audiobooks/red.png'),
        imageSecundaria:'',
        title:"Little red riding hood",
        text: "",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/red/red1.png'),
        title:"",
         text: "Once upon a time there was a sweet little girl. Her grandmother loved her very much, and she gave her a little cap made of red velvet. Because it suited her so well, and she wanted to wear it all the time, she came to be known as Little Red Riding Hood.",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/red/red2.png'),
        title:"",
        text: "One day her mother said to her:"+'\n'+"- Come Little Red Riding Hood. Here is a piece of cake and a bottle of wine. Take them to your grandmother. She is sick and weak, and they will do her well. Behave yourself on the way, and do not leave the path -",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/red/red3.png'),
        title:"",
        text: "- Where are you going so early, Little Red Riding Hood? - asked the wolf"+'\n'+"- To my grandmother's house - "+'\n'+"- And what are you carrying under your apron? - asked the wolf again",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/red/red4.png'),
        title:"",
        text: "-  My grandmother is sick and weak, and I am taking her some cake and wine - - Listen, Little Red Riding Hood, haven't you seen the beautiful flowers that are blossoming in the woods? Why don't you go and take a look? It is very beautiful in the woods.",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/red/red5.png'),
        title:"",
        text: "Little Red Riding Hood opened her eyes and saw the sunlight breaking through the trees and how the ground was covered with beautiful flowers. She thought, “If a take a bouquet to grandmother, she will be very pleased”",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/red/red6.png'),
        title:"",
        text: "And she ran off into the woods looking for flowers. Each time she picked one she thought that she could see an even more beautiful one a little way off, and she ran after it, going further and further into the woods. But the wolf ran straight to the grandmother's house and knocked on the door.",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/red/red7.png'),
        title:"",
        text: "The wolf pressed the latch, and the door opened. He stepped inside, went straight to the grandmother's bed, and ate her up. Then he took her clothes, put them on, and put her cap on his head. He got into her bed and pulled the curtains shut.",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/red/red8.png'),
        title:"",
        text: "When Little Red Riding Hood arrived, she walked into the parlor, and everything looked so strange that she thought, Grandmother was lying there with her cap pulled down over her face and looking very strange.",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/red/red9.png'),
        title:"",
        text: "- Oh, grandmother, what big ears you have!"+'\n'+"- All the better to hear you with."+'\n'+"- Oh, grandmother, what big eyes you have!"+'\n'+"- All the better to see you with."+'\n'+"- Oh, grandmother, what big hands you have!"+'\n'+"- All the better to grab you with!"+'\n'+"- Oh, grandmother, what a horribly big mouth you have!"+'\n'+"- All the better to eat you with!",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/red/red10.png'),
        title:"",
        text: "And with that he jumped out of bed, jumped on top of poor Little Red Riding Hood, and ate her up. As soon as the wolf had finished this tasty bite, he climbed back into bed, fell asleep, and began to snore very loudly.",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/red/red11.png'),
        title:"",
        text: "A huntsman was just passing by. He thought it strange that the old woman was snoring so loudly, so he decided to take a look. He stepped inside, and in the bed there lay the wolf that he had been hunting for such a long time."+'\n'+"- He has eaten the grandmother, but perhaps she still can be saved. I won't shoot him, thought the huntsman.",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/red/red12.png'),
        title:"",
        text: "So he took a pair of scissors and cut open his belly.  Little Red Riding Hood  and the grandmother came out alive . Then Little Red Riding Hood fetched some large heavy stones. They filled the wolf's belly with them, and when he woke up and tried to run away, the stones were so heavy that he fell down dead. The three of them were happy, and Little Red Riding Hood returned home happily and safely.",
    },
    {
        imagePrincipal:"",
        imageSecundaria:'',
        title:"THE END",
        text: "",
    },
]

const ApiPoor =[
    {
        imagePrincipal:require('../../../../assets/audiobooks/poor.png'),
        imageSecundaria:'',
        title:"The poor old lady",
        text: "",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/poor/poor1.png'),
        title:"",
         text: "Once upon a time there was an old lady With nothing to eat, But meat, fruit, sweets, Cakes, eggs, bread and fish.",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/poor/poor2.png'),
        title:"",
        text: "She drank broth, chocolate, Milk, wine, tea and coffee, And the poor woman could not find What to eat or what to drink.",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/poor/poor3.png'),
        title:"",
        text: "And this old woman did not have Not a little hut in where to live But a large house With its vegetables plot and its garden",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/poor/poor4.png'),
        title:"",
        text: "No one, nobody cared for her But Andrés and Juan Gil And eight servants and two pages with livery and bow-tie.",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/poor/poor5.png'),
        title:"",
        text: "She never had anything to sit on But chairs and sofas With benches and cushions And springs on the back.",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/poor/poor6.png'),
        title:"",
        text: "Not another bed than a big one More golden than an altar, With soft feather mattress A lot of silk and a lot of frills.",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/poor/poor7.png'),
        title:"",
        text: "And this poor old lady Every year, until her end, She had one more year of age And one year less to live.",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/poor/poor8.png'),
        title:"",
        text: "And when looking herself in the mirror, It always scared her there Another old lady with glasses, Little hat and a toupee.",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/poor/poor9.png'),
        title:"",
        text: "And this poor old lady Did not have what to dress, But dresses of thousand styles And of thousand and thousand fabrics.",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/poor/poor10.png'),
        title:"",
        text: "And if not for his shoes, Flip-flops, boots and booties, Barefoot on the floor was walking this wretch.",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/poor/poor11.png'),
        title:"",
        text: "Appetite never had When finishing eating, Nor enjoyed complete health, When she was unwell.",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/poor/poor6.png'),
        title:"",
        text: "She died of wrinkle disease, Already bent like a three, And never complained again Neither of hunger nor of thirst.",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/poor/poor13.png'),
        title:"",
        text: "And this poor old lady When she died, she left no more, But money, jewels, lands, houses, Eight cats and a turpial bird.",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/poor/poor4.png'),
        title:"",
        text: "Rest in peace, and God allowsThat we could enjoy The poverty of that poor woman And die as bad as she did.",
    },
    {
        imagePrincipal:"",
        imageSecundaria:'',
        title:"THE END",
        text: "",
    },
]

const ApiDuck =[
    {
        imagePrincipal:require('../../../../assets/audiobooks/duck.png'),
        imageSecundaria:'',
        title:"The Ugly Duckling",
        text: "",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/duck.png'),
        title:"",
         text: "Mummy Duck lived on a farm. In her nest, she had five little eggs and one big egg. One day, the five little eggs started to crack. Tap, tap, tap! Five pretty, yellow baby ducklings came out. Then the big egg started to crack. Bang, bang, bang! One big, ugly duckling came out. ‘That’s strange,’ thought Mummy Duck. Nobody wanted to play with him. ‘Go away,’ said his brothers and sisters. ‘You’re ugly!’",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/duck/duck1.png'),
        title:"",
        text: "The ugly duckling was sad. So he went to find some new friends."+'\n'+"‘Go away!’ said the pig."+'\n'+"‘Go away!’ said the sheep."+'\n'+"‘Go away!’ said the cow."+'\n'+"‘Go away!’ said the horse."+'\n'+"No one wanted to be his friend. It started to get cold. It started to snow! The ugly duckling found an empty barn and lived there. He was cold, sad and alone. ",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/duck/duck2.png'),
        title:"",
        text: "Then spring came. The ugly duckling left the barn and went back to the pond. He was very thirsty and put his beak into the water. He saw a beautiful, white bird! ‘Wow!’ he said. ‘Who’s that?’"+'\n'+"‘It’s you,’ said another beautiful, white bird."+'\n'+"‘Me? But I’m an ugly duckling.’",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/duck/duck3.png'),
        title:"",
        text: "‘Not any more. You’re a beautiful swan, like me. Do you want to be my friend?’"+'\n'+"‘Yes,’ he smiled."+'\n'+"All the other animals watched as the two swans flew away, friends forever.",
    },
    {
        imagePrincipal:"",
        imageSecundaria:'',
        title:"THE END",
        text: "",
    },
]

const ApiAladdin =[
    {
        imagePrincipal:require('../../../../assets/audiobooks/aladdin.png'),
        imageSecundaria:'',
        title:"Aladdin And The Magic Lamp",
        text: "",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/aladdin/aladdin1.png'),
        title:"",
         text: "This is the story of Aladdin, a little lazy and cheeky boy, It seems he lived in the far China",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/aladdin/aladdin2.png'),
        title:"",
        text: "When his father died, an old wise man appeared"+'\n'+"'I was his brother, invite me to our house to eat'"+'\n'+"I know you are dirt poor, i can help"+'\n'+"you can go with him!"+'\n'+"I'll take you to a cave where you can have all you ask for"+'\n'+"Lai laralaila rai la la lailaraila la la",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/aladdin/aladdin3.png'),
        title:"",
        text: "'Just take the lamp, you can have the rest'"+'\n'+"'This ring is for you, it may project you'"+'\n'+"Aladdin entered the cave, where he took the lamp and lost of gems, but trying to get outthey waighed too much.",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/aladdin/aladdin4.png'),
        title:"",
        text: "‘Throw me the lamp’"+'\n'+"'Help me out first'"+'\n'+"'Die you scum!'"+'\n'+"'Rot in the cave'",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/aladdin/aladdin5.png'),
        title:"",
        text: "He rubbed the magic ring and a genie appeared"+'\n'+"'What does my master want?'"+'\n'+"'Take me out'",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/aladdin/aladdin6.png'),
        title:"",
        text: "‘What happenes’"+'\n'+"'I don't know'"+'\n'+"'What have you got there'"+'\n'+"'It's a lamp i could sell'"+'\n'+"'Let me clean it'"+'\n'+"Lai laralaila rai la la lailaraila la la",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/aladdin/aladdin7.png'),
        title:"",
        text: "The princess married, that didn't please Aladdin"+'\n'+"'Im going to screw their weedding night'",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/aladdin/aladdin8.png'),
        title:"",
        text: "All nighta without fail"+'\n'+"He would transport them to his place"+'\n'+"'The little prince sleeps here'"+'\n'+"'And you stay with me'",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/aladdin/aladdin9.png'),
        title:"",
        text: "'Daughter you haven't consumed'"+'\n'+"'And its your duty, what will i do'"+'\n'+"'I'll marry you to another'"+'\n'+"'Marry him, he's richer'"+'\n'+"Lai laralaila rai la la lailaraila la la",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/aladdin/aladdin10.png'),
        title:"",
        text: "He kidnappend the princess and took her to palace"+'\n'+"Of course Aladdin went mad"+'\n'+"'Where's my wife?'"+'\n'+"Then he remembered i have another genie my lord"+'\n'+"'Take me to her i need to rescue her'",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/aladdin/aladdin11.png'),
        title:"",
        text: "He arrived in Morocco, ther she was"+'\n'+"'Take me out'"+'\n'+"He gave her a potion to sleep the evil wizard",
    },
    {
        imagePrincipal:"",
        imageSecundaria:require('../../../../assets/audiobooks/aladdin/aladdin12.png'),
        title:"",
        text: "And once he was a sleep Aladdin took his head"+'\n'+"'Take everything back'"+'\n'+"They are glorious and this is the end of this beautiful story",
    },
    {
        imagePrincipal:"",
        imageSecundaria:'',
        title:"THE END",
        text: "",
    },
]