//advice message 1
//underSpent, overSpent, sweetSpot

export function message(result, booger){
    if (booger === 'gas'){
        if (result === 'underSpent') {
            return 'ALERT: We know it is Covid, but have you left the house at all?';
        } else if (result === 'overSpent') { 
            return 'WARNING: You do not have to drive to the mailbox.';
        } else {
            return 'Not too bad. You are right where you want to be!';
        }
    } else if (booger === 'utilities') {
        if (result === 'underSpent') {
            return 'ALERT: It is not the 1800s, use some electricity.';
        } else if (result === 'overSpent') { 
            return 'WARNING: You should not run your AC or heat with the windows open.'; 
        } else {
            return 'Nice job, you are right where you want to be!';
        }
    } else if (booger === 'other') {
        if (result === 'underSpent') {
            return 'ALERT: Treat yourself, LIKE please.';
        } else if (result === 'overSpent') { 
            return 'WARNING: Close the Amazon app.'; 
        } else {
            return 'Great balance of self-care and self-control!';
        }
    } else {
        return '';
    }
}

// //advice message 3
// export const otherMessages = {

//     underSpent: 'ALERT: Treat yourself, LIKE please.',
//     overSpent: 'WARNING: Close the Amazon app.',
//     sweetSpot: 'Great balance of self-care and self-control!',

// };

// export const gasMessages = {

//     underSpent: 'ALERT: We know it is Covid, but have you left the house at all?',
//     overSpent: 'WARNING: You do not have to drive to the mailbox.',
//     sweetSpot: 'Not too bad. You are right where you want to be!',

// };

// //advice message 2
// export const utilitiesMessages = {

//     underSpent: 'ALERT: It is not the 1800s, use some electricity.',
//     overSpent: 'WARNING: You should not run your AC or heat with the windows open.',
//     sweetSpot: 'Nice job, you are right where you want to be!',

// };

