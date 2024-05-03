import { TraitCategory, type Trait } from '~/types'

export const traits: Trait[] = [{
  category: TraitCategory.mental,
  dependsOn: ['anticipation', 'decisions', 'flair', 'teamwork', 'vision', 'passing', 'technique', 'leadership'],
  description: 'Increases the chances of the player taking charge predominantly in midfield situations and using their attributes to influence the team’s performance and pace.',
  name: 'Dictates Tempo',
}, {
  category: TraitCategory.technique,
  dependsOn: ['technique', 'flair', 'bravery', 'composure'],
  description: 'Improves the player’s ability to curl the ball above and beyond his ability as already determined by his attributes.',
  name: 'Curls Ball',
}, {
  category: TraitCategory.technique,
  dependsOn: ['flair', 'technique', 'bravery', 'determination', 'work rate'],
  description: 'Increases the chances of a player displaying more flair during matches and can result in a greater array of skills being used.',
  name: 'Tries Tricks',
}, {
  category: TraitCategory.technique,
  dependsOn: ['flair', 'bravery', 'technique', 'passing', 'finishing', 'determination', 'vision', 'agility'],
  description: 'Increases the likelihood of a player trying to use the outside of his stronger foot rather than his weaker foot, even if the weaker foot is the more natural option for his body position.',
  name: 'Uses Outside of Foot',
}, {
  category: TraitCategory.defensive,
  dependsOn: ['dribbling', 'vision', 'bravery', 'composure', 'technique'],
  description: 'Increases the likelihood of a defender running with the ball into midfield positions.',
  name: 'Brings Ball Out of Defense',
}, {
  category: TraitCategory.defensive,
  dependsOn: ['anticipation', 'decisions', 'positioning', 'tackling', 'strength', 'teamwork', 'determination'],
  description: 'Increases the frequency with which a player will engage in a tackle. It does not simply mean the player goes to ground when challenging for the ball.',
  name: 'Dives Into Tackles',
}, {
  category: TraitCategory.defensive,
  dependsOn: ['tackling', 'positioning', 'teamwork', 'acceleration', 'balance', 'pace', 'strength', 'stamina', 'jumping reach'],
  description: 'Decreases the frequency with which a player will engage into a tackle. It does not simply mean the player stays on his feet when challenging for the ball.',
  name: 'Does Not Dive Into Tackles',
}, {
  category: TraitCategory.defensive,
  dependsOn: ['marking', 'anticipation', 'acceleration', 'agility', 'pace', 'heading', 'tackling', 'balance', 'strength', 'work rate', 'aggression', 'jumping reach'],
  description: 'Increases the chances of a player being successful when asked to adopt tight marking, but his overall success is still controlled by his full set of attributes.',
  name: 'Marks Opponent Tightly',
}, {
  category: TraitCategory.passing,
  dependsOn: ['crossing', 'passing', 'technique', 'vision', 'teamwork', 'concentration', 'decisions'],
  description: 'Increases the chances of a player crossing from a deeper position, rather than seeking to find a better opportunity higher up the pitch.',
  name: 'Crosses Early',
}, {
  category: TraitCategory.passing,
  dependsOn: ['anticipation', 'passing', 'technique', 'decisions', 'teamwork', 'vision'],
  description: 'Increases the frequency of a player looking to move the ball from one side of the pitch to the other.',
  name: 'Likes to Switch Ball to Other Flank',
}, {
  category: TraitCategory.passing,
  dependsOn: ['passing', 'anticipation', 'decisions', 'technique', 'vision', 'teamwork'],
  description: 'Increases the chances of a player opting to give a scoring chance to a team-mate rather than take it on himself. The success of the decision will be based off the player’s attributes.',
  name: 'Looks for Pass Rather than Attempting to Score',
}, {
  category: TraitCategory.passing,
  dependsOn: ['passing', 'anticipation', 'teamwork', 'acceleration', 'off the ball', 'first touch', 'technique', 'determination', 'strength', 'balance'],
  description: 'Increases the frequency with which a player will make a pass and immediately want to receive the ball again, having moved into an advantageous position.',
  name: 'Plays One-Two\'s',
}, {
  category: TraitCategory.passing,
  dependsOn: ['anticipation', 'passing', 'technique', 'teamwork', 'flair', 'vision', 'decisions'],
  description: 'Increases the frequency with which a player will attempt through balls.',
  name: 'Tries Killer Balls Often',
}, {
  category: TraitCategory.passing,
  dependsOn: ['passing', 'technique', 'teamwork', 'vision', 'decisions', 'anticipation'],
  description: 'Increases the chances of a player attempting to pass the ball over longer distances.',
  name: 'Tries Long Range Passes',
}, {
  category: TraitCategory.dribbling,
  dependsOn: ['work rate', 'acceleration', 'agility', 'pace', 'first touch', 'technique'],
  description: 'Increases the chances of a player looking to beet his immediate opponent for sheer pace and athleticism to get into a more advantageous position.',
  name: 'Knocks Ball Past Opponents',
}, {
  category: TraitCategory.dribbling,
  dependsOn: ['pace', 'dribbling', 'acceleration', 'balance', 'strength', 'determination', 'concentration', 'stamina', 'work rate', 'technique'],
  description: 'Increases the likelihood of a player opting to dribble with the ball regardless of how many opponents are positioned to try to dispossess him.',
  name: 'Likes to Beat Opponent Repeatedly',
}, {
  category: TraitCategory.dribbling,
  dependsOn: ['dribbling', 'technique', 'flair', 'balance', 'anticipation', 'acceleration', 'work rate', 'agility', 'pace'],
  description: 'Increases the chances of a player choosing to run with the ball rather than pass it.',
  name: 'Runs With Ball Often',
}, {
  category: TraitCategory.dribbling,
  dependsOn: ['decisions', 'vision', 'passing', 'anticipation'],
  description: 'Decreases the chances of a player choosing to run with the ball instead looking to make a pass at every turn.',
  name: 'Runs With Ball Rarely',
}, {
  category: TraitCategory.dribbling,
  dependsOn: ['dribbling', 'technique', 'flair', 'balance', 'agility', 'anticipation', 'decisions'],
  description: 'Increases the chances of a player looking to pass or dribble against pressure in a defensive position, rather than opting for the safety-first approach of clearing the ball.',
  name: 'Tries to Play Way Out of Trouble',
}, {
  category: TraitCategory.finishing,
  dependsOn: ['flair', 'finishing', 'technique', 'anticipation'],
  description: 'ncreases the chances of a player attempting a spectacular overhead kick rather than a header at goal or to a team-mate when in an attacking position.',
  name: 'Attempts Overhead Kicks',
}, {
  category: TraitCategory.finishing,
  dependsOn: ['finishing', 'technique', 'vision', 'anticipation', 'composure', 'decisions'],
  description: 'Increases the likelihood of a player looking to lift the ball over the goalkeeper when presented with a chance at goal.',
  name: 'Likes to Lob Keeper',
}, {
  category: TraitCategory.finishing,
  dependsOn: ['finishing', 'dribbling', 'anticipation', 'composure', 'flair', 'agility', 'pace', 'acceleration'],
  description: 'Increases the likelihood of a player looking to go around the goalkeeper in one-on-one situations.',
  name: 'Likes to Round Keeper',
}, {
  category: TraitCategory.finishing,
  dependsOn: ['finishing', 'technique', 'composure', 'decisions', 'anticipation', 'vision', 'flair'],
  description: 'Increases the chances of a player opting to place his shots with accuracy rather than power them.',
  name: 'Places Shots',
}, {
  category: TraitCategory.finishing,
  dependsOn: ['long shots', 'technique', 'vision', 'finishing'],
  description: 'Increases the frequency with which a player will attempt shots from outside the penalty area.',
  name: 'Shoots From Distance',
}, {
  category: TraitCategory.finishing,
  dependsOn: ['finishing', 'technique', 'strength'],
  description: 'Increases the chances of a player opting to shoot with power over placement. It also increases the likelihood of a player attempting long-range shots, particularly where his Flair is better than his decisions.',
  name: 'Shoots With Power',
}, {
  category: TraitCategory.finishing,
  dependsOn: ['finishing', 'technique', 'composure', 'vision', 'anticipation', 'decisions'],
  description: 'Increases the likelihood of a player taking a shot before considering a touch to settle himself, unless he’s one-on-one, at which point he will take the best course of action for that situation.',
  name: 'Tries First Time Shots',
}, {
  category: TraitCategory.movement,
  dependsOn: ['work rate', 'anticipation', 'vision', 'decisions', 'off the ball', 'teamwork', 'finishing', 'technique'],
  description: 'Increases the frequency with which a player makes forward runs, adjusting for team mentality.',
  name: 'Arrives Late in Opponent\'s Area',
}, {
  category: TraitCategory.movement,
  dependsOn: ['vision', 'work rate', 'decisions', 'off the ball', 'dribbling', 'passing', 'technique', 'anticipation', 'decisions'],
  description: 'Increases the frequency of a forward player dropping into midfield to get possession against a team playing with a deep defensive line.',
  name: 'Comes Deep to Get Ball',
}, {
  category: TraitCategory.movement,
  dependsOn: ['pace', 'dribbling', 'technique', 'teamwork', 'vision'],
  description: 'Increases the frequency with which a player will to attack central areas from a nominal wider starting position.',
  name: 'Cuts Inside from Both Wings',
}, {
  category: TraitCategory.movement,
  dependsOn: ['work rate', 'natural fitness', 'off the ball', 'anticipation', 'teamwork'],
  description: 'Increases the frequency with which a player makes forward runs, adjusting for team mentality.',
  name: 'Gets Forward Whenever Possible',
}, {
  category: TraitCategory.movement,
  dependsOn: ['anticipation', 'aggression', 'off the ball', 'strength', 'teamwork', 'decisions'],
  description: 'Mostly governs how often a player makes forward runs but the frequency can also be affected by player tactical instructions.',
  name: 'Gets into Opposition Area',
}, {
  category: TraitCategory.movement,
  dependsOn: ['crossing', 'pace', 'technique', 'vision', 'positioning', 'dribbling', 'teamwork'],
  description: 'Ensures the player will remain in wide areas of the pitch whenever possible.',
  name: 'Hugs Line',
}, {
  category: TraitCategory.movement,
  dependsOn: ['acceleration', 'pace', 'natural fitness', 'agility', 'first touch', 'technique', 'anticipation', 'decisions', 'off the ball', 'teamwork'],
  description: 'Increases the frequency with which a player will look to make runs in behind the defense. The success is determined by his other attributes.',
  name: 'Likes to Try to Beat Offside Trap',
}, {
  category: TraitCategory.movement,
  dependsOn: ['anticipation', 'off the ball', 'acceleration', 'agility', 'teamwork', 'decisions', 'vision', 'first touch'],
  description: 'Increases the frequency with which central players will move into the space between their position and a wide attacking position. It also allows wide players in certain roles to move inside into that space.',
  name: 'Moves into Channels',
}, {
  category: TraitCategory.movement,
  dependsOn: ['technique', 'first touch', 'teamwork', 'strength', 'balance', 'anticipation', 'passing', 'jumping reach', 'vision', 'flair', 'decisions'],
  description: 'Player will look to hold up the ball in attacking areas.',
  name: 'Plays With Back to Goal',
}, {
  category: TraitCategory.movement,
  dependsOn: ['marking', 'anticipation', 'decisions', 'positioning', 'teamwork', 'vision', 'work rate', 'determination'],
  description: 'Player will make no forward runs, adjusted for team mentality.',
  name: 'Stays Back at All Times',
}]
