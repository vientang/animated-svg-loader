const barGroup1 = [
    {
        id: 'line1',
        width: 50,
        height: 20,
        fill: '#3092ec',
        x: 0,
        y: 0,
        animateProperty: 'width',
        animateFrom: 50,
        animateTo: 350,
        animateId: 'line1_anim',
        animateDuration: '0.3s',
        animateFill: 'freeze'
    },
    {
        id: 'line2',
        width: 0,
        height: 20,
        fill: '#ab6cfe',
        x: 30,
        y: 30,
        animateProperty: 'width',
        animateFrom: 0,
        animateTo: 200,
        animateId: 'line2_anim',
        animateBegin: 'line1_anim.end',
        animateDuration: '0.3s',
        animateFill: 'freeze'
    },
    {
        id: 'line3',
        width: 0,
        height: 20,
        fill: '#fd8085',
        x: 60,
        y: 60,
        animateProperty: 'width',
        animateFrom: 0,
        animateTo: 160,
        animateId: 'line3_anim',
        animateBegin: 'line2_anim.end',
        animateDuration: '0.3s',
        animateFill: 'freeze'
    },
    {
        id: 'line4',
        width: 0,
        height: 20,
        fill: 'lightgrey',
        x: 90,
        y: 90,
        animateProperty: 'width',
        animateFrom: 0,
        animateTo: 200,
        animateId: 'line4_anim',
        animateBegin: 'line3_anim.end',
        animateDuration: '0.2s',
        animateFill: 'freeze'
    },
    {
        id: 'line5',
        width: 0,
        height: 20,
        fill: 'lightgrey',
        x: 90,
        y: 120,
        animateProperty: 'width',
        animateFrom: 0,
        animateTo: 200,
        animateId: 'line5_anim',
        animateBegin: 'line4_anim.end',
        animateDuration: '0.2s',
        animateFill: 'freeze'
    },
    {
        id: 'line6',
        width: 0,
        height: 20,
        fill: '#fd8085',
        x: 60,
        y: 150,
        animateProperty: 'width',
        animateFrom: 0,
        animateTo: 120,
        animateId: 'line6_anim',
        animateBegin: 'line5_anim.end',
        animateDuration: '0.2s',
        animateFill: 'freeze'
    },
    {
        id: 'line7',
        width: 0,
        height: 20,
        fill: '#ab6cfe',
        x: 30,
        y: 180,
        animateProperty: 'width',
        animateFrom: 0,
        animateTo: 90,
        animateId: 'line7_anim',
        animateBegin: 'line6_anim.end',
        animateDuration: '0.2s',
        animateFill: 'freeze'
    },
    {
        id: 'line8',
        width: 0,
        height: 20,
        fill: '#3092ec',
        x: 0,
        y: 210,
        animateProperty: 'width',
        animateFrom: 50,
        animateTo: 130,
        animateId: 'line8_anim',
        animateBegin: 'line7_anim.end',
        animateDuration: '0.3s',
        animateFill: 'freeze'
    }
]

const barGroup2 = [
    {
        id: 'line9',
        width: 0,
        height: 20,
        fill: '#3092ec',
        x: 0,
        y: 250,
        animateProperty: 'width',
        animateFrom: 0,
        animateTo: 350,
        animateId: 'line9_anim',
        animateBegin: 'line8_anim.end;line9_anim.end+1.75',
        animateDuration: '0.25s',
        animateFill: 'freeze'
    },
    {
        id: 'line10',
        width: 0,
        height: 20,
        fill: '#ab6cfe',
        x: 30,
        y: 280,
        animateProperty: 'width',
        animateFrom: 0,
        animateTo: 200,
        animateId: 'line10_anim',
        animateBegin: 'line9_anim.end',
        animateDuration: '0.25s',
        animateFill: 'freeze'
    },
    {
        id: 'line11',
        width: 0,
        height: 20,
        fill: '#fd8085',
        x: 60,
        y: 310,
        animateProperty: 'width',
        animateFrom: 0,
        animateTo: 160,
        animateId: 'line11_anim',
        animateBegin: 'line10_anim.end',
        animateDuration: '0.25s',
        animateFill: 'freeze'
    },
    {
        id: 'line12',
        width: 0,
        height: 20,
        fill: 'lightgrey',
        x: 90,
        y: 340,
        animateProperty: 'width',
        animateFrom: 0,
        animateTo: 200,
        animateId: 'line12_anim',
        animateBegin: 'line11_anim.end',
        animateDuration: '0.25s',
        animateFill: 'freeze'
    },
    {
        id: 'line13',
        width: 0,
        height: 20,
        fill: 'lightgrey',
        x: 90,
        y: 370,
        animateProperty: 'width',
        animateFrom: 0,
        animateTo: 200,
        animateId: 'line13_anim',
        animateBegin: 'line12_anim.end',
        animateDuration: '0.25s',
        animateFill: 'freeze'
    },
    {
        id: 'line14',
        width: 0,
        height: 20,
        fill: '#fd8085',
        x: 60,
        y: 400,
        animateProperty: 'width',
        animateFrom: 0,
        animateTo: 120,
        animateId: 'line14_anim',
        animateBegin: 'line13_anim.end',
        animateDuration: '0.25s',
        animateFill: 'freeze'
    },
    {
        id: 'line15',
        width: 0,
        height: 20,
        fill: '#ab6cfe',
        x: 30,
        y: 430,
        animateProperty: 'width',
        animateFrom: 0,
        animateTo: 90,
        animateId: 'line15_anim',
        animateBegin: 'line14_anim.end',
        animateDuration: '0.25s',
        animateFill: 'freeze'
    },
    {
        id: 'line16',
        width: 0,
        height: 20,
        fill: '#3092ec',
        x: 0,
        y: 460,
        animateProperty: 'width',
        animateFrom: 0,
        animateTo: 130,
        animateId: 'line16_anim',
        animateBegin: 'line15_anim.end',
        animateDuration: '0.25s',
        animateFill: 'freeze'
    }
]

export { barGroup1, barGroup2 }
