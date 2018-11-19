class Dog {
    constructor(name, location) {
        this.name = name
        this.location = location
        this.walks = []
    }

    get speak() {
        return `Woof! my name is ${name}`
    }


    walk(location, distance) {
        this.walks.push(new Walk(location, distance))
    }

    display_walks() {
        for (let walk of this.walks) {
            console.log(walk.location + ': ' + walk.distance + ', at: ' + walk.time)
        }
    }

    total_distance() {
        let total = 0
        for (let walk of this.walks) {
            total += walk.distance
        }
        console.log('The total distance walked was: ' + total)
    }


}

class Walk {
    constructor(location, distance) {
        this.location = location
        this.distance = distance
        this.time_stamp = new Date()
    }

    get time() {
        let date = this.time_stamp.getDate()
        let month = this.time_stamp.getMonth()
        let year = this.time_stamp.getFullYear()
        let hour = this.time_stamp.getHours()
        let minute = this.time_stamp.getMinutes().toString().length > 1 ? this.time_stamp.getMinutes() : '0' + this.time_stamp.getMinutes()

        return hour + ':' + minute + ' on ' + date + '/' + month + '/' + year
    }
}

let doggo = new Dog('Rover', 'Brisbane')

doggo.walk('Brisbane', 50)
doggo.walk('Indooroopili', 70)

doggo.display_walks()
doggo.total_distance()