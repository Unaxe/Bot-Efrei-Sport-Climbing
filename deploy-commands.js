const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('seance')
		.setDescription('Créer une nouvelle scéance')
		.addStringOption(option => 
			option.setName('salle')
				.setRequired(true)
				.setDescription('Salle de la scéance')
				.addChoice('antreblock', 'antreblock')
				.addChoice('arkose', 'arkose')
				.addChoice('climb-up', 'climb-up')
				.addChoice('vertical-art', 'vertical-art')
		)
		.addStringOption(option => 
			option.setName('date')
				.setRequired(true)
				.setDescription('Jour de la semaine')
				.addChoice('lundi', 'lundi')
				.addChoice('mardi', 'mardi')
				.addChoice('mercredi', 'mercredi')
				.addChoice('jeudi', 'jeudi')
				.addChoice('vendredi', 'vendredi')
				.addChoice('samedi', 'samedi')
				.addChoice('dimanche', 'dimanche')
				)
		.addStringOption(option => 
			option.setName('heure')
				.setRequired(true)
				.setDescription('Heure de début')
				.addChoice('8h', '8')
				.addChoice('9h', '9')
				.addChoice('10h', '10')
				.addChoice('11h', '11')
				.addChoice('12h', '12')
				.addChoice('13h', '13')
				.addChoice('14h', '14')
				.addChoice('15h', '15')
				.addChoice('16h', '16')
				.addChoice('17h', '17')
				.addChoice('18h', '18')
				.addChoice('19h', '19')
				.addChoice('20h', '20')
				.addChoice('21h', '21')
			),
	new SlashCommandBuilder().setName('activité')
		.setDescription('Savoir son nombre de séances')

]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);