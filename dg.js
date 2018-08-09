const fs = require('fs');


const rooms = ['1Bed', '2Bed', '3Bed', '4Bed', '5Bed']
const types = ['Dome', 'Castle', 'Cottage', 'Hut', 'Igloo', 'Hobbit-Hole', 'Palace', 'Dungeon', 'Apartment', 'Farm', 'Lake~House', 'Beach~House', 'Hacker~House']
const areas = ["Stonefell","Rustfort","Crowband","Eaststorm","Newshield","Mosshall","Shroudfalls","Bridgevale","Baymount","Whaledrift","Smoothwind","Timberdale","Bouldermoor","Snakehill","Glimmercross","Silverbreach","Rimebourne","Knightmoor","Rogueguard","Brinewatch","Timberbrook","Lakewich","Darkwell","Baregulf","Fairville","Greenfort","Magehand","Baremeadow","Baybourne","Sunhaven","Oxstrand","Beachbell","Newborn","Snakefell","Sandvault","Basinfrost","Stillshire","Crystalgulch","Starfalls","Duskbarrow","Mutestrand","Knightbrook","Silkmere","Fearwatch","Southgrave","Emberwell","Miststall","Mightburgh","Darkyard","Oldford","Eldermaw","Midshire","Stormshore","Oxview","Fallhall","Shadowgrasp","Lostford","Graybreach","Eldershire","Bonewatch","Knightharbor","Shimmermoor","Sleetstall","Dogbury","Millguard","Cursegulf","Swiftmaw","Ghostshield","Millfell","Roguestrand","Cavelight","Hollowrock","Steammond","Elderwall","Pineward","Dogbarrow","Baypoint","Blindfair","Newmount","Clearrun","Roseshell","Rustrun","Purekeep","Whaleborn","Steepmire","Pearlbury","Pearlhallow","Swanford","Dragonhallow","Crystalreach","Muteminster","Ravenbourne","Wintermoor","Smoothland","Southcrest","Eagleacre","Purehorn","Falsewood","Stormcall","Emberfort","Amberfall","Dusthold","Everview","Basinmaw","Steelcairn","Nevergulch","Houndscar","Ironpost","Honeyville","Clearbreak","Greenport","Roguebell","Goldguard","Summermount","Farreach","Ebonholde","Honeyhelm","Grimfell","Blindlight","Spiritvale","Ghostgulch","Oxacre","Mosswick","Glimmerfield","Curseglen","Duststall","Boulderborn","Fairbarrow","Eaglebreak","Cliffville","Highgrasp","Oxholde","Cloudyard","Highbarrow","Honeyreach","Dewguard","Frostshell","Deerfrost","Mudpass","Faybrook","Winterbury","Shroudmere","Castlemire","Whitsummit","Littlerun","Moonhorn","Rimescar","Frostgarde","Oakenfield","Grimburn","Lagoonpeak","Gloomhold","Earthrock","Freywich","Ghosthorn","Slypost","Dogbreak","Grimecrest","Smallhallow","Bellfall","Spirithost","Dragonyard","Bearwind","Stormpoint","Sandgarde","Steamshire","Direborn","Heartbarrow","Cliffview","Brittlegrave","Bareshire","Dawngate","Swampcairn","Fearguard","Lightmount","Deeprest","Deerfield","Edgegulch","Brittleburn","Lakechill","Nightshear","Swiftshear","Pearlfront","Starlight","Wildeside","Everside","Roguebrook","Deadtide","Boulderharbor","Smallgate","Sunbrook","Steepmoor","Knightfield","Mistreach","Westdenn","Beargate","Timbertide","Winterbarrow","Whitbury","Pearlminster","Dawnhost","Silkmire","Dragonbay","Steelborough","Glimmerbell","Mosshallow","Millhaven","Shadowyard"]

let char = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"]

const out = fs.createWriteStream('./data.txt', {flags: 'a'})

let dataGen = function () {

	let count = 1;

	

		for (let j = 0; j < rooms.length; j++) {
			let room = rooms[j]
			for (let k = 0; k < types.length; k++) {
				let type = types[k]
				for (let l = 0; l < areas.length; l++) {
					let area = areas[l]
					for (let m = 0; m < char.length; m++) {
						let c1 = char[m]
						for(let n = 0; n < char.length; n++) {
						  let c2 = char[n]
							for(let o = 0; o < char.length; o++) {
								let c3 = char[o]
									name = `${room} ${type} ${area} ${c1}${c2}${c3}`
									let listing = {id: count, name: name}
									count++
                  console.log(listing)
                  out.write(listing + '\r\n', 'utf-8')
									if (count >= 10000001) { return }
							}
						}
					}
				}
			}
		}

}

dataGen();

// fs.writeFile('./sampleData.js', file, err => (err ? console.log('error occured: ', err) : console.log('sampleCommentData saved.')));
