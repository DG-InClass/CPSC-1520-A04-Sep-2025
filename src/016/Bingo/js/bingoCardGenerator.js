/**
 * Generates a BINGO card from the set of card values and other options.
 * 
 * @param {object} options Options for creating a bingo card.
 * @param {boolean} options.freeSpace Whether a free space item should be used in the middle cell.
 * @param {{letter: string, values: number[]}[]} options.numbers The numbers for the BINGO columns.
 * @returns {HTMLTableElement} A `<table>` element with all the contents of the bingo card.
 */
export const createBingoCard = function(options) {
    // The long way to create variables for each of the options' properties
    // is to just declare and assign them individually
    // const freeSpace = options.freeSpace;
    // const numbers = options.numbers;
    // There's an "easier" way - Object Destructuring
    const { freeSpace, numbers } = options;


    const card = document.createElement('table');
    //     <table data-bingo-card>
    card.setAttribute('data-bingo-card', '');
    // debugger
    // TODO: Create the bingo card based on the options supplied.
    // 1) Add <thead>
    const header = document.createElement('thead');
    // 2) Add <tr>
    const tableRow = document.createElement('tr');
    // 3) Add all the <th> for the column headings.
    numbers.forEach(column => {
        const thTag = document.createElement('th');
        const text = document.createTextNode(column.letter);
        thTag.appendChild(text);
        tableRow.appendChild(thTag);
    });

    // 4) Assembling the pieces
    header.appendChild(tableRow);
    card.appendChild(header);
    debugger

    // 5) Add <tbody>
    const body = document.createElement('tbody');
    card.appendChild(body);

    // 6) Add a <tr> for each of the number value sets
    //       Add a <td> for each individual cell or value
    /*
    numbers: [
        { letter: "B", values: [14, 4, 10, 8, 12] },
        { letter: "I", values: [30, 28, 23, 16, 27] },
        { letter: "N", values: [41, 35, 43, 39] },
        { letter: "G", values: [53, 57, 46, 48, 56] },
        { letter: "O", values: [74, 68, 75, 70, 64] },
    ]
    */
    for(let colIndex = 0; colIndex < 5; colIndex++ ){
        const trTag = document.createElement('tr');
        for(let rowIndex = 0; rowIndex < numbers.length; rowIndex++) {
            const rowData = numbers[rowIndex];
            // Use a copy of the column values so that I can modify it
            let allColumns = rowData.values.slice(); // copy the array
            if(freeSpace && rowIndex === 2) {
                allColumns = [...allColumns.slice(0,2), 'FREE', ...allColumns.slice(2)];
            }
            const cellData = allColumns[colIndex];
            const cell = document.createElement('td');
            let textNode = document.createTextNode(cellData);
            cell.appendChild(textNode);
            trTag.appendChild(cell);
        }
        body.appendChild(trTag);
    }
    card.appendChild(body);
    debugger

    return card;
}
