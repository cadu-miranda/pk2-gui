const { exec } = require('child_process')

const buttonPICVerify = document.querySelector('#pic-verify')
const buttonPICWrite = document.querySelector('#pic-write')
const buttonPICErase = document.querySelector('#pic-erase')
const buttonPICBlankCheck = document.querySelector('#pic-blankCheck')
const logger = document.querySelector('#logger')

buttonPICVerify.addEventListener('click', () => {

    logger.innerHTML = ''

    try {

        const picVerify = 'pk2cmd -p -i'

        exec(picVerify, (err, stdout, stderr) => {


            if (err) {

                console.error(err)
                return
            }

            console.log(stdout)
            console.log(stderr)
        })
    }

    catch (error) {

        console.error(error)
    }
})

buttonPICWrite.addEventListener('click', () => {

    logger.innerHTML = ''

    try {

        const getWriteFile = document.querySelector('#caminho-arquivo').files[0].path
        const picWrite = `pk2cmd -p -m -t -r -f${getWriteFile}`

        exec(picWrite, (err, stdout, stderr) => {

            if (err) {

                console.error(err)
                return
            }

            console.log(stdout)
            console.log(stderr)
        })
    }

    catch (error) {

        console.error(error)
    }
})

buttonPICErase.addEventListener('click', () => {

    logger.innerHTML = ''

    try {

        const picErase = 'pk2cmd -p -e'

        exec(picErase, (err, stdout, stderr) => {

            if (err) {

                console.error(err)
                return
            }

            console.log(stdout)
            console.log(stderr)
        })
    }

    catch (error) {

        console.error(error)
    }
})

buttonPICBlankCheck.addEventListener('click', () => {

    logger.innerHTML = ''

    try {

        const picBlankCheck = 'pk2cmd -p -c'

        exec(picBlankCheck, (err, stdout, stderr) => {

            if (err) {

                console.error(err)
                return
            }

            console.log(stdout)
            console.log(stderr)
        })
    }

    catch (error) {

        console.error(error)
    }
})
