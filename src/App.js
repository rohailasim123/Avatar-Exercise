import React, { useState } from 'react';
import './App.css';
import avatarBlank from "./avatar_blank.png";

// Color palette from https://coolors.co/palettes/trending/happy
const happyColors = [
    '#ffbe0b', '#352700',  '#6a4e00', '#9f7500', '#d49c00', '#ffbe0b', '#ffcb3b', '#ffd86c', '#ffe59d', '#fff2ce', '#fb5607', '#331101',  '#662202', '#9a3202', '#cd4303', '#fb5607', '#fc773a', '#fd996b', '#febb9d','#feddce' , '#ff006e', '#330016',  '#66002c', '#990042', '#cc0058', '#ff006e', '#ff338b', '#ff66a8', '#ff99c5','#ffcce2' ,'#8338ec', '#190535',  '#320a6a', '#4b0fa0', '#6414d5', '#8338ec', '#9b5ef0', '#b487f4', '#cdaff8','#e6d7fb' ,'#3a86ff', '#00183e',  '#00307c', '#0048bb', '#005ff9', '#3a86ff', '#609dff', '#88b5ff', '#afceff','#d7e6ff',  '#ff595e', '#440002',  '#890005', '#cd0007', '#ff121a', '#ff595e', '#ff787d', '#ff9a9d', '#ffbcbe','#ffddde' , '#ffca3a', '#3e2e00',  '#7c5b00', '#bb8900', '#f9b700', '#ffca3a', '#ffd560', '#ffdf88', '#ffeaaf','#fff4d7' , '#8ac926', '#1c2808',  '#38510f', '#537917', '#6fa11f', '#8ac926', '#a4dc49', '#bbe577', '#d2eea4','#e8f6d2' , '#1982c4', '#051a27',  '#0a344e', '#0f4e74', '#14679b', '#1982c4', '#31a0e4', '#65b7eb', '#98cff2','#cce7f8' , '#6a4c93', '#150f1e',  '#2a1f3b', '#402e59', '#553d76', '#6a4c93', '#8768b1', '#a58ec5', '#c3b4d8','#e1d9ec'  ,'#ff9f1c', '#382100',  '#704100', '#a86200', '#e08300', '#ff9f1c', '#ffb347', '#ffc675', '#ffd9a3','#ffecd1' , '#ffbf69', '#482900',  '#915200', '#d97b00', '#ffa023', '#ffbf69', '#ffcc89', '#ffd9a6', '#ffe5c4','#fff2e1' , '#ffffff', '#333333',  '#666666', '#999999', '#cccccc', '#ffffff', '#ffffff', '#ffffff', '#ffffff','#ffffff' , '#cbf3f0', '#114844',  '#229088', '#3ad1c7', '#81e2db', '#cbf3f0', '#d4f5f3', '#dff7f6', '#eafaf9','#f4fcfc' , '#2ec4b6', '#092724',  '#124e48', '#1b746c', '#249b8f', '#2ec4b6', '#50d6c9', '#7ce0d6', '#a7eae4','#d3f5f1' , '#ef476f', '#390511',  '#720a22', '#ac0f34', '#e51445', '#ef476f', '#f26d8c', '#f591a9', '#f9b6c5','#fcdae2' , '#ffd166', '#473200',  '#8f6400', '#d69600', '#ffbc1f', '#ffd166', '#ffda85', '#ffe3a3', '#ffedc2','#fff6e0' , '#06d6a0', '#012b20',  '#02563f', '#03805f', '#04ab7f', '#06d6a0', '#1cf9be', '#55fbce', '#8efcdf','#c6feef' ,'#118ab2', '#031b23',  '#073747', '#0a526a', '#0d6e8e', '#118ab2', '#18b5e9', '#51c8ef', '#8bdaf4','#c5edfa' , '#073b4c', '#010c0f',  '#03171e', '#04232d', '#062e3c', '#073b4c', '#0e7699', '#16b3e7', '#62cdf0','#b1e6f8' , '#ff5e5b', '#450100',  '#8b0200', '#d00300', '#ff1a16', '#ff5e5b', '#ff7f7c', '#ff9f9d', '#ffbfbe','#ffdfde' , '#d8d8d8', '#2b2b2b',  '#575757', '#828282', '#adadad', '#d8d8d8', '#e0e0e0', '#e8e8e8', '#f0f0f0','#f7f7f7' , '#ffffea', '#626200',  '#c4c400', '#ffff27', '#ffff89', '#ffffea', '#ffffef', '#fffff3', '#fffff7','#fffffb' , '#00cecb', '#002928',  '#005250', '#007a78', '#00a3a0', '#00cecb', '#0afffb', '#47fffc', '#85fffd','#c2fffe' , '#ffed66', '#473f00',  '#8f7e00', '#d6bd00', '#ffe51f', '#ffed66', '#fff185', '#fff4a3', '#fff8c2','#fffbe0' , '#9b5de5', '#1e0937',  '#3c126f', '#591ba6', '#7725dc', '#9b5de5', '#ae7dea', '#c29eef', '#d7bef4','#ebdffa' , '#f15bb5', '#3d0527',  '#7a0b4d', '#b71074', '#eb1e99', '#f15bb5', '#f47cc4', '#f69cd2', '#f9bde1','#fcdef0' , '#fee440', '#3f3700',  '#7e6d01', '#bda401', '#fcda01', '#fee440', '#feea65', '#feef8b', '#fff4b2','#fffad8' , '#00bbf9', '#002532',  '#004b64', '#007096', '#0096c8', '#00bbf9', '#2fcbff', '#63d8ff', '#97e5ff','#cbf2ff' , '#00f5d4', '#00312a',  '#006255', '#00937f', '#00c4aa', '#00f5d4', '#2bffe3', '#60ffea', '#95fff1','#cafff8'  ,'#f9c80e', '#342901',  '#675203', '#9b7a04', '#cfa305', '#f9c80e', '#fad240', '#fbdd70', '#fde8a0','#fef4cf' , '#f86624', '#371302',  '#6f2503', '#a63805', '#de4b07', '#f86624', '#fa8651', '#fba47c', '#fcc3a8','#fee1d3' , '#ea3546', '#34050a',  '#670b14', '#9b101e', '#cf1628', '#ea3546', '#ee5d6b', '#f28590', '#f6aeb5','#fbd6da' , '#662e9b', '#14091f',  '#28123d', '#3d1b5c', '#51257b', '#662e9b', '#853fc6', '#a36fd4', '#c29fe2','#e0cff1' , '#43bccd', '#0b272b',  '#174e55', '#227580', '#2d9cab', '#43bccd', '#68cad7', '#8dd7e1', '#b3e4eb','#d9f2f5'  ,'#5bc0eb', '#072b3a',  '#0e5674', '#1680ae', '#21a9e4', '#5bc0eb', '#7cccef', '#9dd9f3', '#bee6f7','#def2fb' ,'#fde74c', '#423a01',  '#837401', '#c5ae02', '#fde10d', '#fde74c', '#feed72', '#fef295', '#fef6b8','#fffbdc' ,'#9bc53d', '#1f280c',  '#3e5018', '#5d7824', '#7da030', '#9bc53d', '#afd165', '#c3dd8c', '#d7e8b2','#ebf4d9' , '#e55934', '#321006',  '#63200d', '#952f13', '#c73f1a', '#e55934', '#ea7b5d', '#ef9c85', '#f4bdae','#faded6' , '#fa7921', '#371701',  '#6e2d02', '#a54403', '#dc5b04', '#fa7921', '#fb924b', '#fcad78', '#fdc8a5','#fee4d2'  
]

function App() {
	const [image, setImage] = useState(avatarBlank);
	const [imageName, setImageName] = useState(avatarBlank);
	const [message, setMessage] = useState();


	const handleImageChange = (e) => {
		setMessage("");
		const file = e.target.files[0];
		const reader = new FileReader();
		
		if (file) {
			reader.readAsDataURL(file);
		}

		reader.onload = (event) => {
			const img = new Image();
			img.onload = () => {
				setImage(reader.result);
				setImageName(img);
			};
			
			img.src = event.target.result;
		};

	};

		/*
	Input: coordinates of pixel in image
	Output: Boolean. True if pixel is within avatar circle
	*/
	const withinCircle = (x, y) => {
		return (((x - 256)**2 + (y - 256)**2) ** 0.5) <= 256;
	}

	const hexToRgb = hex =>
	  hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
				 ,(m, r, g, b) => '#' + r + r + g + g + b + b)
		.substring(1).match(/.{2}/g)
		.map(x => parseInt(x, 16))

	const happyColorsRGB = happyColors.map(hexToRgb)

	const isSimilar = ([r1, g1, b1], [r2, g2, b2]) => {
		return Math.abs(r1-r2)+Math.abs(g1-g2)+Math.abs(b1-b2) < 30;
	}
	
	const uploadImage = () => {
		setMessage("Validating Image")

		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');
		
		canvas.width = imageName.width;
		canvas.height = imageName.height;
		
		// Check if image is 512 x 512
		if (!(canvas.width === 512 && canvas.height === 512)) {
			console.log("Invalid Size");
			setMessage("Invalid Image: Avatar must be 512 x 512");
			return;
		}
		
		
		ctx.drawImage(imageName, 0, 0);
		const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
		const data = imageData.data;

		// console.log(data);

		// Check if non-transparent pixels are within the circle
		let happyPixels = 0;
		let count = 0;
		for (let i = 0; i < data.length; i += 4) {
			let pixel =	[data[i], data[i + 1], data[i + 2]];  
			let position = i / 4;
			let x = position % 512;
			let y = Math.floor(position / 512);
			let within = withinCircle(x,y);
			
			if (!within && pixel[0] === 0 && pixel[1] === 0 && pixel[2] === 0) {
				count = count + 1;
			}
			
			// Convert to required format: make pixels outside circle transparent
			if ( !within ) {
				if (data[i+3] !== 0 && (data[i] > 0  || data[i+1] > 0 || data[i+2] > 0)) {
					setMessage("Invalid Image: Avatar must be within the circle")
					return;
				}
				// data[i] = 0;
				// data[i+1] = 0;
				// data[i+2] = 0;
				// data[i+3] = 0;
			}
			
			// Check if colors give a happy feeling
			for (let j = 0; j < happyColors.length; j++) {
				if ( isSimilar(pixel, happyColorsRGB[j]) ) {
					happyPixels += 1;
					break;
				}
			}
			
		}

		if (happyPixels / (512**2) > 0.6) {
			setMessage("Valid Avatar: Avatar gives a happy feeling :)");
		} else {
			setMessage("Valid Avatar: Avatar does not give a happy feeling :(");
		}


		ctx.putImageData(imageData, 0, 0);
		setImage(canvas.toDataURL());
	};

  return (
	<div className="App">

	  	<h1 className='header'>Avatar Upload</h1>
	  	<div className='imageView' >
	  		{image && <img src={image} alt="Avatar" className='imagefile' />}
		</div>

		<div className="controls">
			<button>
				<label htmlFor="file-upload" className="custom-file-upload">
					Upload Image
				</label>
			</button>
			<input id="file-upload" type="file"   onChange={handleImageChange} accept="image/png" />
			<button onClick={uploadImage}>Set Avatar</button>
			<br />
			<h4 className='messages'>{message}</h4>
		</div>

	</div>
  );
}

export default App;