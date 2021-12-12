import { TEAMS } from '../shared/teams'
import { MATCHES } from '../shared/matches';

export const initialState = {
    teams: TEAMS,
    matches: MATCHES,
};

export const Reducer = (state = initialState, action) => {
    return state;
};