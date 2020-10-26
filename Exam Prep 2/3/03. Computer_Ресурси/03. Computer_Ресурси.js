class Computer {
    constructor(ramMemory, cpuGHz, hddMemory) {
        this.ramMemory = Number(ramMemory), 
        this.cpuGHz = Number(cpuGHz), 
        this.hddMemory = Number(hddMemory), 
        this.taskManager = [],
        this.installedPrograms = []
    }

    installAProgram(name, requiredSpace) {
        
        if (this.hddMemory < requiredSpace) {
            throw new Error('There is not enough space on the hard drive');
        }
        
        let program = {
            name: name, 
            requiredSpace: requiredSpace
        }

        this.hddMemory -= requiredSpace;

        this.installedPrograms.push(program);

        return program;
    }

    uninstallAProgram(name) {

        let index = this.installedPrograms.findIndex(pr => pr.name === name);
        
        if (index < 0) {
            throw new Error('Control panel is not responding');
        }

        this.hddMemory += this.installedPrograms[index].requiredSpace;

        this.installedPrograms.splice(index, 1);

        return this.installedPrograms;
    }

    openAProgram(name) {

        let index = this.installedPrograms.findIndex(pr => pr.name === name);

        if (index < 0) {
            throw new Error(`The ${name} is not recognized`);
        }

        if (this.taskManager.findIndex(pr => pr.name === name) > -1) {
            throw new Error(`The ${name} is already open`);
        }

        let ramRequired = (this.installedPrograms[index].requiredSpace / this.ramMemory) * 1.5;
        let cpuRequired = ((this.installedPrograms[index].requiredSpace / this.cpuGHz) / 500) * 1.5;

        if (ramRequired >= 100) {
            throw new Error(`${name} caused out of memory exception`);
        }

        if (cpuRequired >= 100) {
            throw new Error(`${name} caused out of cpu exception`);
        }

        let openProgram = {
            name: name, 
            ramUsage: ramRequired, 
            cpuUsage: cpuRequired
        }

        this.taskManager.push(openProgram);

        return openProgram;
    }

    taskManagerView() {

        if (this.taskManager.length === 0) {
            return 'All running smooth so far';
        }

        let result = '';
        this.taskManager.forEach(pr => {
            result += `Name - ${pr.name} | Usage - CPU: ${pr.cpuUsage.toFixed(0)}%, RAM: ${pr.ramUsage.toFixed(0)}%\n`;
        });

        return result.trim();
    }

}



