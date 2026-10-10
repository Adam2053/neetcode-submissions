/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        // reverse a linked list

      if (!head) return null;

        // 1) Reverse the entire list
        let prev = null;
        let curr = head;
        while (curr) {
            let nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }
        // prev is head of reversed list
        let revHead = prev;

        // 2) Remove nth node from start of reversed list (1-indexed)
        if (!revHead) return null; // safety

        // If we need to remove the first node in the reversed list
        if (n === 1) {
            revHead = revHead.next;
        } else {
            // Walk to (n-1)th node (node before the one we want to remove)
            let node = revHead;
            for (let i = 1; i < n - 1 && node !== null; i++) {
                node = node.next;
            }
            // node should now be the (n-1)th node; remove node.next if exists
            if (node && node.next) {
                node.next = node.next.next;
            } else {
                // n was invalid (larger than length) — return original list reversed back
                // (Optional behavior: here we just reverse back and return)
            }
        }

        // 3) Reverse the list again to restore original order
        prev = null;
        curr = revHead;
        while (curr) {
            let nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }
        // prev is the new head of the final list
        return prev;
    }
}
