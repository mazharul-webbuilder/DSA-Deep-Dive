/***
 * Definition for singly-linked list.
 */
class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

    const reverseList = (list: ListNode | null): number[] => {
        const digits: number[] = [];
        let current = list;

        while (current) {
            if (current.val === null || current.val === undefined) current.val = 0; // safe guard
            digits.push(current.val);
            current = current.next;
        }

        return digits.reverse(); // reverse for easier addition
    }

    const l1Digits = reverseList(l1);
    const l2Digits = reverseList(l2);

    const maxLen = Math.max(l1Digits.length, l2Digits.length);
    const resultDigits: number[] = [];
    let carry = 0;

    for (let i = 0; i < maxLen; i++) {
        const sum = (l1Digits[i] || 0) + (l2Digits[i] || 0) + carry;
        resultDigits.push(sum % 10);
        carry = Math.floor(sum / 10);
    }

    if (carry > 0) resultDigits.push(carry);

    // convert back to ListNode
    let dummy = new ListNode(0);
    let current = dummy;

    resultDigits.reverse().forEach(d => {
        current.next = new ListNode(d);
        current = current.next;
    });

    return dummy.next;
}




let lNode1 = new ListNode(0)
// let lNode2 = new ListNode(4)
// let lNode3 = new ListNode(3)
// lNode1.next = lNode2;
// lNode2.next = lNode3

let l2Node1 = new ListNode(1)
// let l2Node2 = new ListNode(6)
// let l2Node3 = new ListNode(4)
// l2Node1.next = l2Node2;
// l2Node2.next = l2Node3

console.log(addTwoNumbers(lNode1, l2Node1))