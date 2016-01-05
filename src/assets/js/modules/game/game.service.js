angular.module('Game').factory('GameSvc', GameSvc);

function GameSvc() {
    var factory = this;
    
    factory.parse = parse;

    return factory;

    ///////

    function parse(abbr) {
        var obj = {abbr: abbr};

        switch(abbr) {
            case 'ts':
                obj.title = 'Tiberian Sun';
            break;

            case 'tsm':
                obj.abbr = 'ts';
                obj.title = 'Tiberian Sun - (mod maps)';
            break;

            case 'ra':
                obj.title = 'Red Alert';
            break;

            case 'yr':
                obj.title = 'Yuri\'s Revenge';
            break;

            case 'fs':
                obj.title = 'Firestorm';
            break;

            case 'am':
                obj.title = 'Aftermath';
            break;

            case 'ra2':
                obj.title = 'Red Alert 2';
            break;

            case 'dta':
                obj.title = 'The Dawn of the Tiberium Age';
            break;

            case 'td':
                obj.title = 'Tiberium Dawn';
            break;

            default:
                obj.title = 'Global';
        }

        return obj;
    }
}